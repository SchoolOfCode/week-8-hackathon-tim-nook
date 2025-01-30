import AddPostcardButton from "../AddPostcardButton/AddPostcardButton";
import InputField from "../InputField/InputField";

function Form() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <InputField></InputField>
      <AddPostcardButton>Add</AddPostcardButton>
    </div>
  );
}

export default Form;
