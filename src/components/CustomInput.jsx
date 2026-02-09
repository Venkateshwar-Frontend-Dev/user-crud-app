import { TextField } from "@mui/material";

const CustomInput = ({ multiline, rows, ...props }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      autoComplete="off"
      multiline={multiline}
      rows={rows}
      {...props}
    />
  );
};

export default CustomInput;
