import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomTableBodyLoader from "../../components/CustomTableBodyLoader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e7e7e7",
    color: theme.palette.common.black,
    fontWeight: 700,
    padding: "7px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "7px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UsersTable = ({ users = [], onEdit, onDelete, loading }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <CustomTableBodyLoader colSpan={5} />
        ) : (
          <TableBody>
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}

            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{user.firstName}</StyledTableCell>
                <StyledTableCell>{user.lastName}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell align="center" sx={{ minWidth: 100 }}>
                  <IconButton onClick={() => onEdit(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => onDelete(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
