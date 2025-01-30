import AddPostcardButton from "../AddPostcardButton/AddPostcardButton";
import InputField from "../InputField/InputField";
import Dropdown from "../Dropdown/Dropdown";

function Form({ postboxes, setSelectedPostbox }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Dropdown postboxes={postboxes} setSelectedPostbox={setSelectedPostbox} />
      <InputField></InputField>
      <AddPostcardButton>Add</AddPostcardButton>
    </div>
  );
}

export default Form;
