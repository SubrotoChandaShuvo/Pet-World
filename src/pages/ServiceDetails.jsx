import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  // const [serviceDetails, setServiceDetails]=useState(null)

  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == id);

  const [isBook, setBook] = useState(false);

  const handleBookForm = () => {
    setBook(!isBook);
  };

  const handleBook=()=>{
    toast.success("Service Booking Successful! 🎉");
    setBook(!isBook);
  }

  return (
    <div className="flex flex-col items-center px-[145px] py-6">
      <img
        className="w-1/2 rounded-2xl my-5"
        src={findResult?.image}
        alt="Service Image"
      />
      <h1 className="text-xl lg:text-2xl">
        Service Name: {findResult?.serviceName}
      </h1>
      <h4 className="font-semibold">Category: {findResult?.category}</h4>
      <p>Provider Name: {findResult?.providerName}</p>
      <p>Provider E-mail: {findResult?.providerEmail}</p>
      <div className="flex flex-col md:flex-row justify-between gap-22">
        <p className="text-blue-400">Price: ${findResult?.price}</p>
        <p className="text-amber-600 flex gap-1">
          Rating: ☆{findResult?.rating}
        </p>
      </div>
      <p className="font-medium text-red-500">
        Available Slot: {findResult?.slotsAvailable}
      </p>
      <button
        onClick={handleBookForm}
        className="btn btn-neutral transform transition-transform duration-300 hover:scale-102 mt-3"
      >
        {
            !isBook?'Book Service':'Cancel Booking'
        }
        
      </button>
      {isBook && (
        <form className="fieldset  p-5 m-6 rounded-2xl shadow shadow-gray-600">
            <h1 className="text-xl font-bold">For Booking The Service</h1>
          <label className="text-[15px]">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full "
            placeholder="Your Name"
          />
          <label className="text-[15px]">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full mb-2"
            placeholder="Enter Your Email"
          />
          <p onClick={handleBook} className="btn btn-primary transform transition-transform duration-300 hover:scale-102">
            Book Now
          </p>
        </form>
      )}
    </div>
  );
};

export default ServiceDetails;
