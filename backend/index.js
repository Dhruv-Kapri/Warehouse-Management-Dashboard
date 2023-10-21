require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

const uri = process.env.MONGO_URI;
const sec = process.env.SECRET;
const port = process.env.PORT || 4000;
const FRONT_END_URL = process.env.FRONT_END_URL;

// Create an Express application
const app = express();

// Hash encryption
const salt = bcrypt.genSaltSync(10);
const secret = sec;

// Middleware setup
app.use(
  cors({
    origin: FRONT_END_URL,
    // origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
); // Enable Cross-Origin Resource Sharing
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Connect to MongoDB
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define your API routes
// const exampleRouter = require("./routes/example"); // Replace with your actual routes
// app.use("/api/example", exampleRouter);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        email,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("Unauthorized");
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json("Unauthorized");
    }
    res.json(decoded);
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").json("Logged out");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
