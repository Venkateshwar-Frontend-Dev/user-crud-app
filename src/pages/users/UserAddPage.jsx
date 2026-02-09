import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import CustomContent from "../../components/CustomContent";
import { userSchema } from "../../schemas/userForm.schema";
import { userFormFields } from "../../config/userForm.config";
import usePostRequest from "../../api/method/usePostRequest";
import { useAlert } from "../../context/AlertContext";
import UserForm from "./UserForm";

const UserAddPage = () => {
  const navigate = useNavigate();
  const { postData, loading } = usePostRequest();
  const { showAlert } = useAlert();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data) => {
    const result = await postData("/users", data);
    showAlert(result.success, result.message);
    if (result.success) {
      navigate("/users");
    }
  };

  return (
    <CustomContent title="Add User" to="/users" btnText="Back">
      <UserForm
        handleFormSubmit={handleSubmit(onSubmit)}
        userFormFields={userFormFields}
        register={register}
        errors={errors}
        reset={reset}
        loading={loading}
        isAdd={true}
      />
    </CustomContent>
  );
};

export default UserAddPage;
