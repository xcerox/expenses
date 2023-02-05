import { useState } from "react";
import ExpenseType from "../../models/expense.type";
import { ExpenseFormProps } from "../../models/expenseForm.props";
import { formatToInput } from "../../utils/formatUtil";
import "./expenseForm.css";

const defaultValues: ExpenseType = {
  amount: 0,
  date: new Date(),
  title: "",
};

const ExpenseForm = (props: ExpenseFormProps) => {
  const [expense, setExpense] = useState<ExpenseType>({
    ...defaultValues,
    ...props.expense,
  });

  const titleInputHandler = (event: any) => {
    setExpense((prevState) => ({ 
        ...prevState, 
        title: event.target.value 
    }));
  };

  const amountInputHandler = (event: any) => {
    setExpense((prevState) => ({
      ...prevState,
      amount: Number(event.target.value),
    }));
  };

  const dateInputHandler = (event: any) => {
    setExpense((prevState) => ({
      ...prevState,
      date: new Date(event.target.value),
    }));
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onSaveExpense && props.onSaveExpense(expense);
    setExpense(defaultValues);
  };

  const cancelHandler = (event: any)  => {
    event.preventDefault();
    props.onCancel && props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expense.title}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expense.amount || ''}
            
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            value={formatToInput(expense.date)}
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {props.showCancelButton && <button type="button" onClick={cancelHandler}>Cancel</button>}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
