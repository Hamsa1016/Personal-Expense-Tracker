import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Add new expense to state
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // Delete expense by id
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
  };

  return (
    <div className="container">
      <h1>Personal Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
