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

const SignupForm = ({ onSignup }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = async (ev) => {
    ev.preventDefault();
    onSignup(name, email, password);
  };

  return (
    <form className="signup" onSubmit={handleSignup}>
      <h1>Create an account</h1>
      <TextInput
        label="Name"
        placeholder="Your name"
        size="md"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <TextInput
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <PasswordInput
        label="Password"
        placeholder="Create a password"
        mt="md"
        size="md"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <p>Must be at least 8 characters</p>
      <Button type="submit" fullWidth mt="xl" size="md">
        Sign Up
      </Button>
    </form>
  );
};

SignupForm.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

const Signup = ({ onSignup }) => {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Create an Account
        </Title>

        <SignupForm onSignup={onSignup} />

        <Text ta="center" mt="md">
          Already have an account?
          <Anchor href="/login" fw={700}>
            Log in
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

Signup.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

export default Signup;
