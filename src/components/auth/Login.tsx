import {
  Form,
  Heading,
  TextField,
  View,
  AlertDialog,
  Button,
} from "@adobe/react-spectrum";
import React from "react";
import useLogin from "../../hooks/useLogin";

const Login: React.FC = () => {
  const {
    email,
    password,
    isLoading,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin();

  return (
    <View
      width="size-3600"
      margin="auto"
      padding="size-200"
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
    >
      <Heading level={1}>Login</Heading>
      {error && (
        <AlertDialog
          title="Error"
          variant="warning"
          primaryActionLabel="confirm"
        >
          {error}
        </AlertDialog>
      )}
      <Form onSubmit={handleSubmit}>
        <TextField
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@example.com"
        ></TextField>
        <TextField
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></TextField>
        <Button type="submit" variant="cta" isDisabled={isLoading}>
          {isLoading ? 'logging...' : 'login'}
        </Button>
      </Form>
    </View>
  );
};

export default Login;
