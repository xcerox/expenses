import {useState} from 'react';
import './App.css';
import { Expenses, NewExpense } from './components';
import ExpenseType from './models/expense.type';

const expenses: ExpenseType[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [items, setItems] = useState<ExpenseType[]>(expenses);

  const newExpenseHandler = (expense: ExpenseType) => {
    setItems(prevState => [...prevState, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={newExpenseHandler}/>
      <Expenses items={items}/>
    </div>
  );
}

export default App;
