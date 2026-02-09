import { Snackbar, Alert } from "@mui/material";
import { useAlert } from "../context/AlertContext";

const CustomAlert = () => {
  const { alert, hideAlert } = useAlert();

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={hideAlert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={hideAlert}
        severity={alert.severity}
        variant="filled"
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
