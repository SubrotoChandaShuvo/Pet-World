import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-8 ">
      <title>Services</title>
      <div className="mt-12 mb-4">
          <h3
            className="text-2xl md:text-4xl lg:text-4xl font-bold text-center pb-8
               bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent"
          >
            Our Popular Winter Care Services
          </h3>
      </div>
      <div className="px-8 md:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 ">
          {services.map((service) => (
            <div key={service.id} className="card bg-base-100 w-90 shadow-sm
            transform transition-transform duration-300 hover:scale-105">
              <figure>
                <img
                  className="w-full h-[300px] object-cover"
                  src={service?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title ">{service?.serviceName}</h2>
                <div className="flex justify-between items-center w-full px-20 pb-1 text-[16px]">
                  <span className="font-semibold">${service?.price}</span>
                  <span className="font-semibold">⭐ {service?.rating}</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/details/${service?.serviceId}`}><button className="btn btn-primary">View details</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
