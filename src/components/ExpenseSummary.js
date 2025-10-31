import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const categories = ["Food", "Transport", "Shopping", "Bills", "Others"];
  const categoryTotals = categories.map(
    (category) =>
      expenses.filter((e) => e.category === category)
        .reduce((sum, e) => sum + e.amount, 0)
  );
ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: categories,
    datasets: [
      {
        data: categoryTotals,
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
        ],
      },
    ],
  };

  return (
    <div className="expense-summary">
      <h2>Total Expenses: ₹{total.toFixed(2)}</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseSummary;

