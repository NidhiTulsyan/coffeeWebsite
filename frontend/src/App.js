import { ThemeProvider } from "@emotion/react";
import {Routes,Route} from "react-router-dom";
import FirstNav from "./components/Firstnav";
import Navbar from "./components/Navbar";
import Theme from "./Theme";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Booking from "./components/Booking";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <FirstNav />
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/booking/:id" element={<Booking />}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
