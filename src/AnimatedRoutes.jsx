import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import PlanetPage from "./Page/PlanetPage";

export default function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<PlanetPage location="Earth" />}></Route>
        <Route path="/:planet" element={<PlanetPage location={location} />} />
      </Routes>
    </AnimatePresence>
  );
}
