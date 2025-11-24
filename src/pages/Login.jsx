import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
        <title>Login</title>
      <div className="hero min-h-lvw lg:min-h-screen p-4 md:p-0">
        <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl transform transition-transform duration-300 hover:scale-105">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="text-[15px]">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="text-[15px]">Password</label>
              <input type="password" className="input w-full mb-4" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div className="">
                <span className="pr-4">Don't have an account? </span>
                <Link className="link link-hover text-blue-500" to={'/signup'}>Register</Link>
              </div>
              <button className="btn btn-primary transform transition-transform duration-300 hover:scale-102">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
