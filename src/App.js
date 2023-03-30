import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  async function getExpenses() {
    let response = await fetch(
      "https://api-expenses-prueba.azurewebsites.net/api/expenses"
    );
    let data = await response.json();
    setExpenses(data);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  /*
  const [expenses, setExpenses] = useState([
    { title: "Gimnasio", amount: 500.0, date: new Date(2022, 1, 28) },
    { title: "Servicios", amount: 1500, date: new Date(2022, 1, 28) },
    { title: "Renta", amount: 4000.0, date: new Date(2022, 1, 28) },
  ]);*/

  const saveExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, enteredExpenseData];
    });
  };

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
