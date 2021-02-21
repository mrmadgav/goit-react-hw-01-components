import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const statisticalData = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="stat-title">{title}</h2>
      <ul className="stat-list">
        {stats.map((item) => {
          return (
            <li
              className="stat-item"
              key={item.id}
              style={{
                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              <span className="stat-label">{item.label}</span>
              <span className="stat-percentage"> {item.percentage}%</span>
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

statisticalData.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
).isRequired;

// function randomColor() {
//   return (this.backgroundcolor =
//     "#" + Math.floor(Math.random() * 16777215).toString(16));
// }
