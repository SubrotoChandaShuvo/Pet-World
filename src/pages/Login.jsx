import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setUser, handleGoogleSignin, loading, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login Successful! 🎉");
        setUser(user);
        setLoading(false);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Login failed❗ Please try again.");
      });

    if (loading) {
      return (
        <div className="flex justify-center pt-10">
          <span className="loading loading-spinner text-neutral loading-lg scale-250"></span>
        </div>
      );
    }
  };

  const googleSignin = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("Login Successful! 🎉");
        navigate(location.state);
      })
      .catch((error) => {
        console.log(error);
      });

    if (loading) {
      return (
        <div className="flex justify-center pt-10">
          <span className="loading loading-spinner text-neutral loading-lg scale-250"></span>
        </div>
      );
    }
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div>
      <title>Login</title>
      <div className="hero min-h-lvw lg:min-h-screen p-4 md:p-0">
        <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl transform transition-transform duration-300 hover:scale-105 shadow-gray-600">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset ">
              <h1 className="text-3xl text-center">Login</h1>
              <label className="text-[15px]">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              <label className="text-[15px]">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="input w-full pr-10"
                  placeholder="Password"
                  aria-label="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-500"
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div>
                <button onClick={handleForget} className="link link-hover">
                  Forgot password?
                </button>
              </div>
              <div className="">
                <span className="pr-4">Don't have an account? </span>
                <Link className="link link-hover text-blue-500" to={"/signup"}>
                  Signup
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
                <FcGoogle className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
