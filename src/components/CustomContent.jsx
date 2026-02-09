import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomBtn from "./CustomBtn";

const CustomContent = ({ title, btnText, to, isAdd, children }) => {
  return (
    <Card sx={{ p: { xs: 1, sm: 2 }, borderRadius: 1.5 }}>
      <CardHeader
        sx={{ p: { xs: 1 } }}
        title={title}
        action={
          <CustomBtn
            variant={isAdd ? "contained" : "outlined"}
            component={Link}
            to={to}
            startIcon={isAdd ? <AddCircleOutlineIcon /> : <ArrowBackIcon />}
          >
            {btnText}
          </CustomBtn>
        }
      />
      <CardContent sx={{ p: { xs: 1 } }}>{children}</CardContent>
    </Card>
  );
};

export default CustomContent;
