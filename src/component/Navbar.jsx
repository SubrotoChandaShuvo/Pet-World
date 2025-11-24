import React from "react";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown relative z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
              >Services</NavLink>
            </li>
            <li>
              <NavLink to="/l"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
              >Services</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img src={Logo} alt="" className="btn btn-ghost rounded-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/l"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn btn-primary text-lg">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
