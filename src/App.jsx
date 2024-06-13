import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BeautyContainer from "./components/BeautyContainer";

import "./App.css";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header title="Glamour Haven"></Header>
      <Navbar />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beauty" element={<BeautyContainer />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
