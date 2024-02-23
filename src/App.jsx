import { useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";
import Navbar from "./Components/Navbar";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      category: "Utility",
      description: "House Hold expense",
      amount: 100,
    },
    {
      id: 2,
      category: "Utility",
      description: "test",
      amount: 100,
    },
    {
      id: 3,
      category: "Groceries",
      description: "House Hold expense",
      amount: 200,
    },
    {
      id: 4,
      category: "Groceries",
      description: "House Hold expense",
      amount: 50,
    },
    {
      id: 5,
      category: "Groceries",
      description: "House Hold expense",
      amount: 100,
    },
  ]);

  // Remove-An-Item-From-Array---
  const deleteItem = (id) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };

  // Filter-Using-Category---
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto p-4 rounded mt-10">
        <ExpenseForm addExpense={addExpense} />
        <div className="max-w-[800px] mx-auto border-gray-500 border-2 p-4 rounded mt-10">
          <ExpenseFilter
            onSelecteCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList expenses={filterCategory} onDelete={deleteItem} />
        </div>
      </div>
    </>
  );
}

export default App;
