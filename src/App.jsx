import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BeautyContainer from "./components/BeautyContainer";
import FragrancesContainer from "./components/FragrancesContainer";
import SkinCareContainer from "./components/SkinCareContainer";
import WomensBagsContainer from "./components/WomensBagsContainer";
import WomensShoesContainer from "./components/WomensShoesContainer";
import WomensWatchesContainer from "./components/WomensWatchesContainer";

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
          <Route path="/fragrances" element={<FragrancesContainer />} />
          <Route path="/skinCare" element={<SkinCareContainer />} />
          <Route path="/womensBags" element={<WomensBagsContainer />} />
          <Route path="/womensShoes" element={<WomensShoesContainer />} />
          <Route path="/womensWatches" element={<WomensWatchesContainer />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
