import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setUser, handleGoogleSignin } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login Successful! 🎉");
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignin = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful! 🎉");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <title>Login</title>
      <div className="hero min-h-lvw lg:min-h-screen p-4 md:p-0">
        <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl transform transition-transform duration-300 hover:scale-105 shadow-gray-600">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset ">
              <label className="text-[15px]">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
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
                <span className="pr-4">Don't have an account? </span>
                <Link className="link link-hover text-blue-500" to={"/signup"}>
                  Register
                </Link>
              </div>
              <button className="btn btn-primary transform transition-transform duration-300 hover:scale-102">
                Login
              </button>
              <p className="text-center">Or Login with Google</p>
              <button
                onClick={googleSignin}
                className="btn transform transition-transform duration-300 hover:scale-102 bg-gray-300"
              >
                <FcGoogle className="text-2xl"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
