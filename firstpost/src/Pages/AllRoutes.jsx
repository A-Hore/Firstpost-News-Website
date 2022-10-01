import { Route, Routes } from "react-router-dom";
import Country from "./Country";
import Politics from "./Politics";
import World from "./World";
import Auto from "./Auto";
import Sports from "./Sports";
import Tech from "./Tech";
import Entertainment from "./Entertainment";
import Food from "./Netra";
import Business from "./Crypto";
import SingleNewsPage from "./SingleNewsPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Country/>}></Route>
      <Route path="/world" element={<World/>}></Route>
      <Route path="/politics" element={<Politics/>}></Route>
      <Route path="/auto" element={<Auto />}></Route>
      <Route path="/sports" element={<Sports/>}></Route>
      <Route path="/entertainment" element={<Entertainment />}></Route>
      <Route path="/tech" element={<Tech />}></Route>
      <Route path="/crypto" element={<Business />}></Route>
      <Route path="/netra" element={< Food />}></Route>
      <Route path="/:user_id" element={< SingleNewsPage />}></Route>
    </Routes>
  );
}
