import CustomBtn from "./CustomBtn";

const CustomResetBtn = ({ handleClick }) => {
  return (
    <CustomBtn variant="outlined" onClick={handleClick}>
      Reset
    </CustomBtn>
  );
};

export default CustomResetBtn;
