import React from "react";
import { TextField, FormControl } from "@mui/material";

const ValidatedTextField = ({
  label,
  value,
  type = "text",
  onChange,
  ...props
}) => {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        label={label}
        value={value}
        type={type}
        onChange={onChange}
        variant="outlined"
        required
        {...props}
      />
    </FormControl>
  );
};

export default ValidatedTextField;
