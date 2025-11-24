import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { registerWithEmailPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    registerWithEmailPassword(email, pass)
    
  }; 

  return (
    <div>
      <title>SignUp</title>
      <div className="hero min-h-lvw lg:min-h-screen p-4 md:p-0">
        <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl transform transition-transform duration-300 hover:scale-105">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="text-[15px]">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="text-[15px]">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Your Full Name"
              />
              <label className="text-[15px]">PhotoURL</label>
              <input
                name="photoUrl"
                type="text"
                className="input w-full"
                placeholder="Enter Your PhotoURL"
              />
              <label className="text-[15px]">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full mb-4"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div className="">
                <span className="pr-4">Already have an account? </span>
                <Link className="link link-hover text-blue-500" to={"/login"}>
                  Login
                </Link>
              </div>
              <button className="btn btn-primary transform transition-transform duration-300 hover:scale-102">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
