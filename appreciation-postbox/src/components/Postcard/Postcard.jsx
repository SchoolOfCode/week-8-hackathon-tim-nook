function Postcard({ postcard }) {
  return (
    <>
      <p>Postcard message: {postcard.content}</p>
      <p>from... {postcard.sender}</p>
    </>
  );
}

export default Postcard;
