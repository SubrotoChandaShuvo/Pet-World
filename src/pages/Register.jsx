import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    registerWithEmailPassword,
    setUser,
    loading,
    setLoading,
    handleGoogleSignin,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    if (pass.length < 6) {
      return toast.error("Less then 6 characters");
    }
    if (!uppercase.test(pass)) {
      return toast.error("Need a Uppercase Latter");
    }
    if (!lowercase.test(pass)) {
      return toast.error("Need a lowercase Latter");
    }

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(userCredential.user);
            toast.success("Registration Successful! 🎉");
            // console.log(userCredential.user);
            setLoading(false);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const googleSignup = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Registration Successful! 🎉");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration failed❗ Please try again.");
      });
  };

  return (
    <div>
      <title>SignUp</title>
      <div className="hero min-h-lvw lg:min-h-screen p-4 md:p-0">
        <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl transform transition-transform duration-300 hover:scale-105 shadow-gray-600">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <h1 className="text-3xl text-center">Signup</h1>
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
              <div className="">
                <span className="pr-4">Already have an account? </span>
                <Link className="link link-hover text-blue-500" to={"/login"}>
                  Login
                </Link>
              </div>
              <button
                className="btn btn-primary transform transition-transform duration-300 hover:scale-102"
                disabled={loading}
              >
                Register
              </button>
              <p className="text-center">Or Register with Google</p>
              <button
                onClick={googleSignup}
                className="btn bg-gray-300 transform transition-transform duration-300 hover:scale-102"
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

export default Register;
