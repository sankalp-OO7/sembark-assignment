import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { Container } from "@mui/material";
import ErrorPage from "./components/ErrorPage";

const App: React.FC = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <Container sx={{ flex: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/details" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
