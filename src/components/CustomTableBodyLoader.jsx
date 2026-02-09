import {
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import CustomLoader from "./CustomLoader";

const CustomTableBodyLoader = ({ colSpan }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colSpan} align="center">
          <CustomLoader />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default CustomTableBodyLoader;
