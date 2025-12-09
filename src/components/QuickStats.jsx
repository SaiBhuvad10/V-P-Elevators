import React from "react";

const stats = [
  { label: "Installations", value: "200+" },
  { label: "Years Experience", value: "25+" },
  { label: "Happy Clients", value: "180+" },
  { label: "Maintenance Contracts", value: "120+" },
];

function QuickStats() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Why Choose V&P Elevators?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold text-blue-600">{item.value}</h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickStats;
