import Postcard from "../Postcard/Postcard";

function PostcardContainer({ postcards }) {
  if (postcards.length === 0) {
    return <p>Select a postbox to see postcards.</p>;
  }

  return (
    <div>
      {postcards.map((postcard) => (
        <Postcard key={postcard.postcardId} postcard={postcard} />
      ))}
    </div>
  );
}

export default PostcardContainer;
