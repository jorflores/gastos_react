import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2></h2>
        <div className="expense-item__price"></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
