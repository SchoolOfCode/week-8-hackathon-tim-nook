import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Title from "./components/Title/Title";
import PostcardContainer from "./components/PostcardContainer/PostcardContainer";
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

//placeholder until data is stored externally
let lastPostcardId = 4;

function App() {
  const [postboxes, setPostboxes] = useState(jsonData);
  const [selectedPostbox, setSelectedPostbox] = useState("");

  const currentPostbox = postboxes.find(
    (postbox) => postbox.postboxId === Number(selectedPostbox)
  );

  const postcardsToShow = currentPostbox ? currentPostbox.postcards : []; // this makes sure that if currentPostbox is undefined then there won't be errors accessing currentPostbox.postcards

  function addNewPostcard(postcardMessage) {
    lastPostcardId++;

    //sender currently not set
    const newPostcard = {
      postcardId: lastPostcardId,
      content: postcardMessage,
      sender: "?",
    };
    setPostboxes((prevPostboxes) =>
      prevPostboxes.map((postbox) => {
        if (postbox.postboxId === selectedPostbox) {
          return {
            ...postbox,
            postcards: [...postbox.postcards, newPostcard],
          };
        }
        return postbox;
      })
    );
  }

  return (
    <ThemeProvider theme={pinkTheme}>
      <>
        <CssBaseline />
        <Header />
        <Title />
        <Form
          addNewPostcard={addNewPostcard}
          postboxes={postboxes}
          setSelectedPostbox={setSelectedPostbox}
        />
        <PostcardContainer postcards={postcardsToShow} />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
