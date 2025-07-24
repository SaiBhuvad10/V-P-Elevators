import React from 'react';

const stats = [
  { label: "Installations", value: "200+" },
  { label: "Years Experience", value: "25+" },
  { label: "Happy Clients", value: "180+" },
  { label: "Maintenance Contracts", value: "120+" }
];

const QuickStats = () => {
  return (
    <section className="quickstats-section">
      <h2 className="quickstats-title">Why Choose V&P Elevators?</h2>
      <div className="quickstats-grid">
        {stats.map((item, index) => (
          <div key={index} className="quickstats-box">
            <h3 className="quickstats-value">{item.value}</h3>
            <p className="quickstats-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;
