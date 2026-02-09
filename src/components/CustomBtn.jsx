import { Button } from "@mui/material";

const CustomBtn = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomBtn;
