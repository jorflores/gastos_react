import "./App.css";
import Expenses from "./Expenses";

function App() {
  const expenses = [
    { title: "Gimnasio", amount: 500.0, date: new Date(2022, 1, 28) },
    { title: "Servicios", amount: 1500, date: new Date(2022, 1, 28) },
    { title: "Renta", amount: 3000.0, date: new Date(2022, 1, 28) },
  ];

  const month = expenses[0].date.toLocaleString("en-US", { month: "long" });
  const day = expenses[0].date.toLocaleString("en-US", { day: "2-digit" });
  const year = expenses[0].date.getFullYear();

  return (
    <div className="App">
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>{expenses[0].title}</h2>
          <div className="expense-item__price">${expenses[0].amount}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
