import React from "react";
import PropTypes from "prop-types";
import "./TransactionHistory.css";

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead className="transaction-label">
      <tr className="transaction-titles">
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className="transaction-body">
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
