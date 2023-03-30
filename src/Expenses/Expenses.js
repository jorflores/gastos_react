import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  console.log(props.items);

  return (
    <div className="card expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
