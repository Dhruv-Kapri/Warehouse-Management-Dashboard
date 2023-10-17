import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./LoginSignup.module.css";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (ev) => {
    ev.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>Login to your account</h1>
      <p>Welcome back! Please enter your details</p>
      <TextInput
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        size="md"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <p>Forgot password</p>
      <Button type="submit" fullWidth mt="xl" size="md">
        Login
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const Login = ({ onLogin }) => {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Warehouse!
        </Title>

        <LoginForm onLogin={onLogin} />

        <Text ta="center" mt="md">
          Don't have an account?
          <Anchor href="/signup" fw={700}>
            Sign up
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
