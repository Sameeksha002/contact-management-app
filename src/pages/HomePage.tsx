import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Dashboard from "../components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowForm(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCreateContactClick = () => {
    setShowForm(true);
  };

  const handleNavigateToContacts = () => {
    setShowForm(false);
    navigate("/contacts");
  };

  const handleContactCreated = () => {
    setShowForm(false);
    toast.success("Contact created successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <nav
        ref={menuRef}
        className="w-full md:w-1/4 bg-gray-800 text-white p-4 md:block"
      >
        <div className="flex justify-between md:hidden">
          <h1 className="text-2xl">Menu</h1>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul className={`md:block ${showMenu ? "block" : "hidden"}`}>
          <li className="mb-2">
            <Link
              to="/"
              className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
            >
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/contacts"
              className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
            >
              Contacts
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <main className="w-full md:w-3/4 p-4">
        <h1 className="text-2xl mb-4">Home</h1>
        {!showForm ? (
          <button
            onClick={handleCreateContactClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Create Contact
          </button>
        ) : (
          <div ref={formRef}>
            <ContactForm onContactCreated={handleContactCreated} />
          </div>
        )}
        <Dashboard />
        <ToastContainer />
      </main>
    </div>
  );
};

export default HomePage;
