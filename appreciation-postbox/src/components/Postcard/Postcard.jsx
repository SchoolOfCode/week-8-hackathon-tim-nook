function Postcard({ postcard }) {
  return (
    <>
      <p>Postcard message: {postcard.content}</p>
      <p>Sender: {postcard.sender}</p>
    </>
  );
}

export default Postcard;
