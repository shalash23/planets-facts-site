import {
  Container,
  CssBaseline,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import images from "../assets/index";
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
        <CssBaseline />
        <Container
          maxWidth={false}
          sx={{
            backgroundImage: `url(${images.backgroundStars})`,
            minHeight: "100vh",
          }}
        >
          <Typography variant="h1" component="h1">
            Hello World
          </Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
}
