import { useState, createContext } from "react";
import data from "../../data.json";

export const planetContext = createContext(null);

export default function PlanetContextProverider({ children }) {
  const [planets] = useState(data);
  return (
    <planetContext.Provider value={[planets]}>
      {children}
    </planetContext.Provider>
  );
}
