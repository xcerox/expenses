import React, {useState} from 'react';
import {ExpenseForm} from "..";
import ExpenseType from "../../models/expense.type";
import { newExpenseProps } from "../../models/newExpense.props";

import './newExpense.css';

const NewExpense = (props: newExpenseProps) => {

    const [isEditMode, setEditMode] = useState(false);

    const expenseSaveHanlder = (expense: ExpenseType) => {
        expense.id =`e${Math.random()}`;
        props.onAddExpense && props.onAddExpense(expense);
    }

    const showFormHandler = () => setEditMode(prevState => !prevState); 
    let Form = <button onClick={showFormHandler}>Add new Expense</button>
    if(isEditMode) {
        Form = <ExpenseForm showCancelButton={true} onSaveExpense={expenseSaveHanlder} onCancel={showFormHandler}/>;
    }

    return (
    <div className="new-expense">
        {Form}
    </div>
    );
}

export default NewExpense;