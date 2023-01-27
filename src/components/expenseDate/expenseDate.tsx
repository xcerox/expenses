import React from "react";
import { splitDate } from "../../utils/formatUtil";
import './expenseDate.css';


const ExpenseDate = ({date}: {date: Date}) => {
  const { month, year, day } = splitDate(date);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default React.memo(ExpenseDate);