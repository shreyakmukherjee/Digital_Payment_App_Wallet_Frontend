import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ABCDPay</h1>
        <div>
          <Link to="/" className="mr-4 hover:underline font-bold">
            Home
          </Link>
          <Link to="/register" className="mr-4 hover:underline font-bold">
            Register
          </Link>
          <Link to="/login" className="hover:underline font-bold">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
