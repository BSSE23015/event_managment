import { Routes, Route } from "react-router-dom"; // ← remove BrowserRouter
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EventDetail from "./pages/EventDetail";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* ← add this */}
        <Route path="/dashboard" element={<UserDashboard />} />{" "}
        {/* ← add this */}
      </Routes>
    </>
  );
}

export default App;
