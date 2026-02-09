import { Box, Grid, Stack } from "@mui/system";
import CustomActionBtn from "../../components/CustomActionBtn";
import CustomInput from "../../components/CustomInput";
import CustomResetBtn from "../../components/CustomResetBtn";

const UserForm = ({
  handleFormSubmit,
  userFormFields,
  register,
  errors,
  reset,
  isAdd,
  loading,
}) => {
  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        {userFormFields.map((field) => (
          <Grid size={{ xs: 12, sm: 6 }} key={field.name}>
            <CustomInput
              label={field.label}
              type={field.type}
              multiline={field.multiline}
              rows={field.rows}
              {...register(field.name)}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
            />
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        spacing={2}
        mt={2}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <CustomResetBtn handleClick={() => reset()} />
        <CustomActionBtn
          btnText={isAdd ? "Submit" : "Update"}
          loading={loading}
        />
      </Stack>
    </Box>
  );
};

export default UserForm;
