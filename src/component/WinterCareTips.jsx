import React from "react";

// const WinterTips = [
//   {
//     id: 1,
//     title: "Keep Your Pet Warm Indoors",
//     description:
//       "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding, and avoid drafts.",
//     icon: "❄️",
//   },
//   {
//     id: 2,
//     title: "Moisturize Paws Regularly",
//     description:
//       "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation.",
//     icon: "🐾",
//   },
//   {
//     id: 3,
//     title: "Limit Outdoor Time",
//     description:
//       "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pet.",
//     icon: "⛄",
//   },
//   {
//     id: 4,
//     title: "Provide Extra Food",
//     description:
//       "Pets use more energy staying warm in winter. Add a little extra food to support their body heat.",
//     icon: "🍖",
//   },
// ];

const winterTips = [
  {
    id: 1,
    title: "Use Pet-Safe Heating Options",
    description:
      "Heated pads and warm bedding can help pets stay comfortable, but always use pet-safe products to avoid overheating or burns.",
    icon: "🔥",
  },
  {
    id: 2,
    title: "Check Your Pet’s Coat Condition",
    description:
      "Winter dryness can cause dull or flaky fur. Brush regularly to remove dead hair and keep their coat healthy.",
    icon: "🧴",
  },
  {
    id: 3,
    title: "Avoid Frozen Water Sources",
    description:
      "Keep pets away from ponds or lakes that may be frozen. Thin ice can be extremely dangerous and unpredictable.",
    icon: "🚫🌊",
  },
  {
    id: 4,
    title: "Keep ID Tags Updated",
    description:
      "Winter storms and icy conditions can disorient pets. Updated tags and microchips help ensure they return home safely.",
    icon: "🏷️",
  },
];


const WinterCareTips = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-10">
        Winter Care Tips
      </h2>

      <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {winterTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
          >
            <div className="text-4xl mb-3 text-center">{tip.icon}</div>

            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {tip.title}
            </h3>

            <p className="text-gray-600 mt-2 text-center">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;

