import React from "react";
import { ExpenseDate, Card} from "..";
import { Entry } from "../../models/entry";
import './expense.css';

const Expense = (props: Entry) => {
  return (
    <Card className="expense">
      <ExpenseDate date={props.date} />
      <div className="expense__description">
        <h2>{props.title}</h2>
        <div className="expense__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default React.memo(Expense);