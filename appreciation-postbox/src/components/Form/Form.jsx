import Dropdown from "../Dropdown/Dropdown";

function Form({ postboxes, setSelectedPostbox }) {
  return (
    <Dropdown postboxes={postboxes} setSelectedPostbox={setSelectedPostbox} />
  );
}

export default Form;
