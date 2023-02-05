import React, {useState} from 'react';
import { ExpenseDate, Card } from "..";
import ExpenseProps from "../../models/expense.type";
import "./expense.css";

const Expense = (props: ExpenseProps) => {
  const [title] = useState(props.title);

  return (
    <Card className="expense">
      <ExpenseDate date={props.date} />
      <div className="expense__description">
        <h2>{title}</h2>
        <div className="expense__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default React.memo(Expense);
