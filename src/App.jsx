import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowVenues from "./fetch/ShowVenues";
import VenueSched from "./fetch/VenueSched";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<ShowVenues/>} />
            <Route path="/api/venue/:id" element={<VenueSched />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
