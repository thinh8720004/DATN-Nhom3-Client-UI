import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import UserHeader from "./components/user/header";
import DrugList from "./components/user/druglist";
import DrugDetail from "./components/user/drugdetail";
import Cart from "./components/user/cart";
import AdminHeader from './components/admin/header';
import Sidebar from './components/admin/sidebar';
import Dashboard from './components/admin/dashboard';
import ProductManagement from './components/admin/productManagement';
import "./App.css";

const AppContent = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Khai báo useNavigate

  const handleDrugSelect = (drug) => {
    setSelectedDrug(drug);
  };

  const addToCart = (drug) => {
    setCart([...cart, drug]);
  };

  const toggleAdmin = () => {
    setIsAdmin(prevIsAdmin => {
      const newIsAdmin = !prevIsAdmin;
      if (newIsAdmin) {
        navigate('/dashboard'); // Chuyển hướng đến Dashboard nếu là Admin
      }
      return newIsAdmin;
    });
  };

  return (
    <div className="container-fluid">
      <button
        onClick={toggleAdmin}
        className={`btn ${isAdmin ? "btn-danger" : "btn-primary"} mb-3`}
      >
        {isAdmin ? "Switch to User" : "Switch to Admin"}
      </button>
      {isAdmin ? (
        <div className="row">
          <AdminHeader />
          <Sidebar />
          <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/" element={<div>Welcome to Admin Dashboard</div>} />
              {/* Thêm các Route khác ở đây */}
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <UserHeader />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DrugList onDrugSelect={handleDrugSelect} />
            <DrugDetail drug={selectedDrug} addToCart={addToCart} />
          </div>
          <Cart cart={cart} />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
