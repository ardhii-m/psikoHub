import React, { useState } from "react";
import { Menu } from "feather-icons-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex bg-[#d8efd3] py-8 px-4 justify-between">
      {/* Logo */}
      <div className="ml-5 text-[#55ad9b] text-2xl font-bold md:text-3xl lg:text-4xl lg:ml-10">
        PsikoHub
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 lg:flex mr-10 font-medium text-base text-[#000]">
        <ul>
          <li className="hover:text-[#3a4d39]">
            <Link to="/">Home Page</Link>
          </li>
        </ul>
        <ul>
          <li className="hover:text-[#3a4d39]">
            <Link to="/konsultasi">Konsultasi</Link>
          </li>
        </ul>
        <ul>
          <li className="hover:text-[#3a4d39]">
            <Link to={isLoginPage ? "/register" : "/login"}>
              {isLoginPage ? "Register" : "Login"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mr-5 lg:hidden md:hidden" onClick={toggleMenu}>
        <Menu />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <div className="absolute top-16 left-0 w-full h-screen bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 text-lg font-medium text-[#000] text-center z-50 md:hidden">
          <ul className="flex-col md:hidden">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/konsultasi">Konsultasi</Link>
            </li>
            <li>
              <Link to={isLoginPage ? "/register" : "/login"}>
                {isLoginPage ? "Register" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
