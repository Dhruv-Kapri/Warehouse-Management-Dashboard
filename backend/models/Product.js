const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  arrival: { type: String, require: true },
  dispatch: { type: String, require: true },
  status: { type: String, require: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

// "products": [{
//   "status": "<arrival/in-store/dispatch>",
//   "name": "<product name>",
//   "quantity": "<quantity>",
//   "arrival_date": "<arrival date>",
//   "dispatch_date": "<dispatch date>"
// }]
