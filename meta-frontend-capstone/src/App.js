import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Reservations from "./components/pages/Reservations";


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
    </>
  );
};

export default App;