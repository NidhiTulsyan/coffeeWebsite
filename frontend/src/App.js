import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import FirstNav from "./components/Firstnav";
import Navbar from "./components/Navbar";
import Theme from "./Theme";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Booking from "./components/Booking";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Adminlog from "./components/Adminlog";
import AddCoffee from "./components/AddCoffee";
import AdminProfile from "./components/AdminProfile";
import AllCoffee from "./components/AllCoffee";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <FirstNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin-login" element={<Adminlog />} />
          <Route path="/add-coffee" element={<AddCoffee />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/all-coffee" element={<AllCoffee />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
