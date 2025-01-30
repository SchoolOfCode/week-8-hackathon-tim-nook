function Dropdown({ postboxes, setSelectedPostbox }) {
  return (
    <>
      <label>Postbox : </label>
      <select onChange={(e) => setSelectedPostbox(e.target.value)}>
        <option value="">Select...</option>
        {postboxes.map((postbox) => (
          <option key={postbox.postboxId} value={postbox.postboxId}>
            {postbox.owner}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
