import { ThemeProvider } from "@emotion/react";
import FirstNav from "./components/Firstnav";
import Navbar from "./components/Navbar";
import Theme from "./Theme";
import HomePage from "./components/HomePage";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <FirstNav />
        <Navbar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
