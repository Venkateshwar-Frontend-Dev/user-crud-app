import CustomBtn from "./CustomBtn";

const CustomActionBtn = ({ btnText, loading }) => {
  return (
    <CustomBtn type="submit" variant="contained" disabled={loading}>
      {btnText}
    </CustomBtn>
  );
};

export default CustomActionBtn;
