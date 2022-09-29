import { Route, Routes } from "react-router-dom";
import Country from "./Country";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Country/>}></Route>
      <Route path="/world" element={<h1>world</h1>}></Route>
      <Route path="/politics" element={<h1>politics</h1>}></Route>
      <Route path="/auto" element={<h1>auto</h1>}></Route>
      <Route path="/sports" element={<h1>sports</h1>}></Route>
      <Route path="/entertainment" element={<h1>entertainment</h1>}></Route>
      <Route path="/tech" element={<h1>tech</h1>}></Route>
      <Route path="/crypto" element={<h1>crypto</h1>}></Route>
      <Route path="/netra" element={<h1>netra</h1>}></Route>
    </Routes>
  );
}
