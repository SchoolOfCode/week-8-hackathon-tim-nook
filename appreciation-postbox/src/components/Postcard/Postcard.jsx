import "./Postcard.css";

function Postcard({ postcard }) {
	return (
		<>
			<section className="postcardWrap">
				<p className="postcardMessage">Postcard message: {postcard.content}</p>
				<p className="postcardSender">from... {postcard.sender}</p>
			</section>
		</>
	);
}

export default Postcard;
