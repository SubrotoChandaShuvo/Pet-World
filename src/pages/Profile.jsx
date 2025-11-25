import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  // console.log(user);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) => {
    
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    // console.log(user);
    
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setUser({...user, photoURL: photoUrl, displayName:name})

        toast.success("Update Successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <title>My Profile</title>
      <div className="avatar py-2">
        <div className="w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <p>{user?.displayName}</p>
      <p className="pb-2">{user?.email}</p>
      <button
        onClick={handleOpenForm}
        className="btn btn-neutral transform transition-transform duration-300 hover:scale-105"
      >
        {isOpen ? "Close Update Form" : "Update Profile"}
      </button>

      {isOpen && (
        <form
          onSubmit={handleUpdate}
          className="fieldset  p-4 m-3 rounded-2xl shadow shadow-gray-600"
        >
          <label className="text-[15px]">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full"
            placeholder="Your Name"
            defaultValue={user?.displayName}
          />
          <label className="text-[15px]">Photo URL</label>
          <input
            name="photoUrl"
            type="text"
            className="input w-full mb-2"
            placeholder="Photo URL"
            defaultValue={user?.photoURL}
          />
          <button className="btn btn-primary transform transition-transform duration-300 hover:scale-105">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
