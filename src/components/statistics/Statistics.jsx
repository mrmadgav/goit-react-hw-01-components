import React from "react";
import PropTypes from "prop-types";

const statisticalData = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map((item) => {
            {
              console.log(item.percentage);
            }
          <li className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>;
        })}
      </ul>
    </section>
  );
};

export default statisticalData;
