import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ProfileBox from "./components/Profile";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const response = await axios.get(
      "http://localhost:8081/user/" + localStorage.getItem("userId")
    );
    console.log(response);
    setUser(response.data);
  };
  useEffect(() => {
    if (localStorage.getItem("username")) {
      fetchUser();
    }
  }, []);
  return (
    <>
      {/* <Home /> */}
      {/* <Register /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfileBox user={user} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
