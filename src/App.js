import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Biography from "./pages/Biography";
import MyFood from "./pages/MyFood";
import MasterClass from "./pages/MasterClass";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound.";
import CssBaseline from "@mui/material/CssBaseline";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#673147",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/biography",
      element: <Biography />,
    },
    {
      path: "/myfoodbyhilda",
      element: <MyFood />,
    },
    {
      path: "/masterclass",
      element: <MasterClass />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
