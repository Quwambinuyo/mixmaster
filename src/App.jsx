import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />}>
          <Route path="cocktail" element={<Cocktail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
