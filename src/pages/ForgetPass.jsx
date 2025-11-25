import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import auth from "../firebase/firebase.config";

const ForgetPass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEmail = e.target.email.value;
    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
        window.open("https://mail.google.com/mail/u/0/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-lvw lg:min-h-screen p-4 md:p-0">
      <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl transform transition-transform duration-300 hover:scale-105 shadow-gray-600">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset ">
            <h1 className="text-3xl text-center">Reset Password</h1>
            <label className="text-[15px]">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              defaultValue={email}
            />
            <button className="btn btn-primary transform transition-transform duration-300 hover:scale-102 mt-3">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
