import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import CustomContent from "../../components/CustomContent";
import { userSchema } from "../../schemas/userForm.schema";
import { userFormFields } from "../../config/userForm.config";
import useGetRequest from "../../api/method/useGetRequest";
import usePutRequest from "../../api/method/usePutRequest";
import { useAlert } from "../../context/AlertContext";
import UserForm from "./UserForm";
import CustomLoader from "../../components/CustomLoader";
import { USER_API } from "../../api/staticApi";

const UserEditPage = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");

  useEffect(() => {
    if (!userId) {
      navigate("/users");
    }
  }, [userId, navigate]);

  const {
    data: user,
    loading: fetchLoading,
    error,
  } = useGetRequest(userId ? `${USER_API}/${userId}` : null);

  const { putData, loading } = usePutRequest();

  console.log(fetchLoading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    const result = await putData(`${USER_API}/${userId}`, data);

    showAlert(result.success ? "success" : "error", result.message);

    if (result.success) {
      navigate("/users");
    }
  };

  useEffect(() => {
    if (error) {
      showAlert(false, error);
    }
  }, [error]);

  return (
    <CustomContent title="Edit User" to="/users" btnText="Back">
      {fetchLoading ? (
        <CustomLoader height={200} />
      ) : (
        <UserForm
          handleFormSubmit={handleSubmit(onSubmit)}
          userFormFields={userFormFields}
          register={register}
          errors={errors}
          reset={reset}
          loading={loading}
        />
      )}
    </CustomContent>
  );
};

export default UserEditPage;
