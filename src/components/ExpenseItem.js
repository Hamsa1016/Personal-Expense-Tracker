import React from "react";

function ExpenseItem({ expense, onDelete }) {
  const { id, amount, category, date, description } = expense;

  return (
    <li className="expense-item">
      <div>
        <strong>{category}</strong>: ₹{amount.toFixed(2)} on {date}
      </div>
      <div>{description}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
