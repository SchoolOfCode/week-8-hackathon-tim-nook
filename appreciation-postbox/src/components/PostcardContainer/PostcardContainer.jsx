import Postcard from "../Postcard/Postcard";
import "./PostcardContainer.css";

function PostcardContainer({ postcards }) {
	if (postcards.length === 0) {
		return <p>Select a Postbox to see Postcards.</p>;
	}

	const borderColorClasses = [
		"borderColor1",
		"borderColor2",
		"borderColor3",
		"borderColor4",
	];

	return (
		<div className="PostcardContainerWrapper">
			<div className="PostcardContainer">
				{postcards.map((postcard, index) => (
					<Postcard
						key={postcard.postcardId}
						postcard={postcard}
						className={borderColorClasses[index % 4]}
					/>
				))}
			</div>
		</div>
	);
}

export default PostcardContainer;
