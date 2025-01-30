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
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const pinkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a40096",
    },
    secondary: {
      main: "#2f0158",
    },
    background: {
      default: "#f7e7f0",
      paper: "#f7e7f0",
    },
  },
});

function App() {
  const [postboxes, setPostboxes] = useState(jsonData);

  return (
    <ThemeProvider theme={pinkTheme}>
      <>
        <CssBaseline />
        <Header />
        <Title />
        <Form />
        <DropdownMenu />
        <SelectedPostbox />
        <NewPostcard />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
