import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import DashboardPage from "./pages/DashboardPage";
import ContactDetail from "./components/ContactDetail";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contact/:id" element={<ContactDetail />} />
    </Routes>
  );
};

export default App;
