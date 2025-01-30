import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import DropdownMenu from "./components/Dropdown/Dropdown";
import NewPostcard from "./components/NewPostcard/NewPostcard";
import SelectedPostbox from "./components/SelectedPostbox/SelectedPostbox";
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
      <DropdownMenu/>
      <SelectedPostbox />
      <NewPostcard />
    </>
  )
}

export default App
