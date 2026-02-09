import { Box, CircularProgress } from "@mui/material";

const CustomLoader = ({ height }) => {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height || "auto",
      }}
    >
      <CircularProgress size={32} />
    </Box>
  );
};

export default CustomLoader;
