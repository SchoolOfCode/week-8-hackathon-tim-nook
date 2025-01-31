import TitleText from "../TitleText/TitleText.jsx";
import postbox from "../../assets/postbox.png";

function Title() {
  return (
    <>
      <TitleText></TitleText>
      <img
        src={postbox}
        style={{ height: 200, width: 180 }}
        alt="Picture of postbox"
      />
    </>
  );
}

export default Title;
