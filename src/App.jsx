import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Landing,
  Cocktail,
  Newsletter,
  HomeLayout,
  Error,
  About,
} from "../src/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
