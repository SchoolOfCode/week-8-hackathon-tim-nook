import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import PostcardContainer from "./components/PostcardContainer/PostcardContainer";
import Footer from "./components/Footer/Footer";
import jsonData from "./data.json";

function App() {
  const [postboxes, setPostboxes] = useState(jsonData);
  const [selectedPostbox, setSelectedPostbox] = useState("");

  const currentPostbox = postboxes.find(
    (postbox) => postbox.postboxId === Number(selectedPostbox)
  );

  const postcardsToShow = currentPostbox ? currentPostbox.postcards : []; // this makes sure that if currentPostbox is undefined then there won't be errors accessing currentPostbox.postcards

  return (
    <>
      <Header />
      <Title />
      <Form postboxes={postboxes} setSelectedPostbox={setSelectedPostbox} />
      <PostcardContainer postcards={postcardsToShow} />
      <Footer />
    </>
  );
}

export default App;
