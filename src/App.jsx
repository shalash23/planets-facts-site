import {
  Container,
  CssBaseline,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import images from "../assets/index";
import Background from "./Background";
import NavBar from "./Components/NavBar";
import PlanetContextProverider from "./Store/PlanetsContext";
import AnimatedRoutes from "./AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#070724",
      },
    },
  });
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <PlanetContextProverider>
          <CssBaseline />
          <Container
            maxWidth={false}
            sx={{
              minHeight: "100vh",
            }}
            disableGutters
          >
            <Background />
            <Router>
              <NavBar />
              <AnimatedRoutes />
            </Router>
          </Container>
        </PlanetContextProverider>
      </ThemeProvider>
    </div>
  );
}
