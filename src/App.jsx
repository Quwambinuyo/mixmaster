import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing";
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
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
