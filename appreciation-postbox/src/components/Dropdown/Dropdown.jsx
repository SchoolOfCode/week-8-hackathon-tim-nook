import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function Dropdown({ postboxes, setSelectedPostbox }) {
  return (
    <FormControl fullWidth>
      <InputLabel>Postbox</InputLabel>
      {
        <Select onChange={(e) => setSelectedPostbox(e.target.value)}>
          <MenuItem value="">Select...</MenuItem>
          {postboxes.map((postbox) => (
            <MenuItem key={postbox.postboxId} value={postbox.postboxId}>
              {postbox.owner}
            </MenuItem>
          ))}
        </Select>
      }
    </FormControl>
  );
}

export default Dropdown;
