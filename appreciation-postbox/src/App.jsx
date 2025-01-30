import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form"
import DropdownMenu from "./components/Dropdown/Dropdown"
import NewPostcard from "./components/NewPostcard/NewPostcard"
import SelectedPostbox from "./components/SelectedPostbox/SelectedPostbox"
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Title></Title>
      <Footer></Footer>
      <Form />
      <DropdownMenu/>
      <SelectedPostbox />
      <NewPostcard />
    </>
  )
}

export default App
