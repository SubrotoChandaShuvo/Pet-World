import React from 'react';

// const vets = [
//   {
//     id: 1,
//     name: "Dr. Alicia Snow",
//     specialization: "Winter Dermatology & Paw Care",
//     experience: "8 Years Exp.",
//     image:
//       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmV0ZXJpbmFyeSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 2,
//     name: "Dr. Kevin Frost",
//     specialization: "Cold Weather Nutrition",
//     experience: "6 Years Exp.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmV0ZXJpbmFyeSUyMG51dHJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 3,
//     name: "Dr. Scarlett Pine",
//     specialization: "Pet Allergies & Dry Skin",
//     experience: "5 Years Exp.",
//     image:
//       "https://images.unsplash.com/photo-1673865641073-4479f93a7776?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmV0ZXJpbmFyeSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
// ];

const vets = [
  {
    id: 1,
    name: "Dr. Emily Hart",
    specialization: "General Veterinary Medicine & Wellness",
    experience: "7 Years Exp.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962785160-458b1a95750b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Dr. Mill Reed",
    specialization: "Surgery & Emergency Care",
    experience: "9 Years Exp.",
    image:
      "https://plus.unsplash.com/premium_photo-1681881940555-088b5ab3b6ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyJTIwZm9yJTIwcGV0JTIwZm9yJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Dr. Olivia Brooks",
    specialization: "Pet Nutrition & Digestive Health",
    experience: "4 Years Exp.",
    image:
      "https://images.unsplash.com/photo-1612523138351-4643808db8f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const OurVets = () => {
    return (
        <div className="pb-12 pt-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Meet Our Expert Vets
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {vets.map((vet) => (
          <div key={vet.id} className="card bg-base-200 shadow-lg hover:shadow-2xl
          transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img
                src={vet.image}
                alt={vet.name}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title text-primary">{vet.name}</h3>
              <p className="text-sm font-semibold">{vet.specialization}</p>
              <p className="opacity-70 text-sm">{vet.experience}</p>

              <button className="btn btn-primary btn-sm mt-3">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default OurVets;