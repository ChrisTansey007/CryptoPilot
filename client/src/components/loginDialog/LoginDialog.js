import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useStore } from "../../store";

const LoginDialog = ({ open, handleClose }) => {
  const login = useStore((state) => state.login);

  const handleLogin = async (username, password) => {
    try {
      await login(username, password);
      handleClose();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  let username = "exampleUsername";
  let password = "examplePassword";

  return (
    <Dialog open={open}>
      <Button onClick={() => handleLogin(username, password)}>Login</Button>
    </Dialog>
  );
};

export default LoginDialog;
