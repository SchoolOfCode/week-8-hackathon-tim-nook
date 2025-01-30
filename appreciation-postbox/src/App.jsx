import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import NewPostcard from "./components/NewPostcard/NewPostcard";
import SelectedPostbox from "./components/SelectedPostbox/SelectedPostbox";
import Form from "./components/Form/Form";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import jsonData from "./data.json";

function App() {
  const [postboxes, setPostboxes] = useState(jsonData);

  return (
    <>
      <Header />
      <Title />
      <Footer />
      <Form />
      <Dropdown />
      <SelectedPostbox />
      <NewPostcard />
    </>
  );
}

export default App;
