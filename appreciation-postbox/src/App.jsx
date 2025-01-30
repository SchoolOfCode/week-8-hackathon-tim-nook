import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form"
import DropdownMenu from "./components/Form"
import NewPostcard from "./components/Form"
import SelectedPostbox from "./components/Form"
import Form from "./components/Form"
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Title></Title>
      <Footer></Footer>
      <Form />;
      <DropdownMenu/>; 
      <SelectedPostbox />;
      <NewPostcard />
    </>
  );
}

export default App;
