import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(services);

  return (
    <div className="mt-8 px-8 md:px-8 lg:px-[120px]">
      <div className="mt-12">
        <h3 className="font-bold text-3xl text-center pb-8">
          Popular Winter Care Services
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {services.slice(0, 6).map((service) => (
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
                <span className="">⭐ {service?.rating}</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
