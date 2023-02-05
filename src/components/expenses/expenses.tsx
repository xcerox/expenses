import React, {useState} from 'react';
import { Expense, ExpenseFilter, Card, ExpensesChart } from "..";
import { ExpensesProps } from "../../models/expenses.props";
import { formatToFullYear } from "../../utils/formatUtil";
import './expenses.css';


const NotFound = () => <h2 className="expenses__fallback">No Expenses found.</h2>

const Expenses = (props: ExpensesProps) => {
  
  const [filter, setFilter] = useState<string>('All');

  const filterHandler = (selected: string) => {
    setFilter(selected);
  }
  
  let itemFilters = props.items;
  if (filter !== 'All') {
    itemFilters = itemFilters.filter(item => formatToFullYear(item.date) === filter);
  }

  let items = [<NotFound />];
  if (itemFilters.length !== 0) {
    items = itemFilters.map((expense) => <Expense key={expense.id} {...expense} />);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filter} onChangeFilter={filterHandler}/>
      <ExpensesChart expenses={itemFilters} />
      {items}
    </Card>
  );
};

export default Expenses;
