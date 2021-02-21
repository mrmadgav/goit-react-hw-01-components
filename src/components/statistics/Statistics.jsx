import React from "react";
import PropTypes from "prop-types";

const statisticalData = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map((item) => {
          return (
            <li className="item" key={item.id}>
              <span className="label">{item.label}:</span>
              <span className="percentage"> {item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default statisticalData;

statisticalData.defaultProps = {
  title: "",
};

statisticalData.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
