import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Bella",
      image:
        "https://i.pinimg.com/736x/e2/0c/95/e20c9563664f7a8520acdbb025ed525e.jpg",
      story:
        "At Pet World, our grooming team recently transformed a nervous rescue dog named Max into a confident, happy pup. His owner was amazed at how clean, energetic, and comfortable he became after our premium grooming and health-check services. Max now visits Pet World every month and runs inside wagging his tail the moment he arrives!",
    },
    {
      id: 2,
      name: "Rocky",
      image:
        "https://i.pinimg.com/736x/ca/8a/ca/ca8acae43c6cd08b09f5c66f90abed71.jpg",
      story:
        "Rocky found a new home after staying in our shelter for 2 months. He now spends his days playing fetch.",
    },
    {
      id: 3,
      name: "Milo",
      image:
        "https://i.pinimg.com/736x/44/f2/c2/44f2c2b7f53a2f83d0ade6f95ea5a960.jpg",
      story:
        "Milo was rescued and adopted into a peaceful home where he loves napping all day.",
    },
  ];

  return (
    <div className="py-16 px-4 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-8
        animate__animated animate__fadeIn animate__delay-1s
        md:text-4xl lg:text-4xl  bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent py-3">
        Hear from Our Happy Customers
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
        See what pet owners have to say about Pet World’s services — grooming, training, and care that keeps their pets happy and healthy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((pet) => (
          <div
            key={pet.id}
            className="border rounded-2xl shadow-md hover:shadow-lg transition p-4 bg-white"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
            <p className="text-gray-600 text-sm">{pet.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
