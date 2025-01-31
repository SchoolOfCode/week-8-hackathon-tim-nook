import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";

function Form({ postboxes, setSelectedPostbox, addNewPostcard }) {
  const [postcardMessage, setPostcardMessage] = useState("");

  function handleClick() {
    addNewPostcard(postcardMessage);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Dropdown postboxes={postboxes} setSelectedPostbox={setSelectedPostbox} />
      <TextField
        label="Message"
        onChange={(e) => setPostcardMessage(e.target.value)}
      />
      <Button onClick={handleClick}>Add</Button>
    </div>
  );
}

export default Form;
