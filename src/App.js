// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import AuthForm from "./components/login";
import Navbar from "./components/Navbar";
import Service from "./components/service"; // Ensure correct import
import Team from "./components/team";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <About />
                            <Service />
                            <Team />
                            <Contact />
                            <Footer />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} /> {/* Ensure path matches Navbar link */}
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/login"
                    element={
                        <>
                            <AuthForm />
                            <Footer /> {/* Footer for Login page */}
                        </>
                    }
                />
            </Routes>
        </Router>
        
    );
}

export default App;