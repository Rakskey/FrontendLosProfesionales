import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { UserProvider } from "./middleware/UserContext.jsx";
import { DialogProvider } from "./middleware/DialogContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/UserPage.jsx";

// Define la función onLogin
const handleLogin = (userData) => {
  console.log("User logged in", userData);
};

function App() {
  return (
    <Router>
      <UserProvider>
        <DialogProvider>
          <ResponsiveAppBar onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Footer/>
        </DialogProvider>
      </UserProvider>
    </Router>
  );
}

export default App;