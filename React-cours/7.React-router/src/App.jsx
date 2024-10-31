import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import UserProfile from "./Components/Userprofile";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import Analytics from "./pages/Analytics/Analytics";
import CyberSecurity from "./pages/Analytics/CyberSecurity";
import Development from "./pages/Analytics/Development";
import UIUX from "./pages/Analytics/UIUX";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/analytics" element={<Analytics />}>
            {/* Sous-routes */}
            <Route path="/analytics/development" element={<Development />} />
            <Route path="/analytics/cybersecurity" element={<CyberSecurity />} />
            <Route path="/analytics/uiux/" element={<UIUX />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
