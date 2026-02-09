import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteRequest from "../../api/method/useDeleteRequest";
import useGetRequest from "../../api/method/useGetRequest";
import { USER_API } from "../../api/staticApi";
import CustomContent from "../../components/CustomContent";
import { useAlert } from "../../context/AlertContext";
import UsersTable from "./UsersTable";

const UserPage = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const {
    data: users,
    loading,
    error,
    message,
    refetch,
  } = useGetRequest(USER_API);
  const { deleteData, loading: deleteLoading } = useDeleteRequest();

  const handleEdit = (user) => {
    navigate(`/users/edit?id=${user.id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure want to delete?")) return;

    const result = await deleteData(`${USER_API}/${id}`);

    showAlert(result.success, result.message);

    if (result.success) {
      refetch();
    }
  };

  useEffect(() => {
    if (error) {
      showAlert(false, error);
    }
  }, [error]);
  return (
    <CustomContent
      title="Users"
      to="/users/add"
      btnText="Add New User"
      isAdd={true}
    >
      <Stack spacing={2}>
        <UsersTable
          users={users || []}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Stack>
    </CustomContent>
  );
};

export default UserPage;
