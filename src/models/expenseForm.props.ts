import ExpenseType from './expense.type';


export interface ExpenseFormProps {
    onSaveExpense?: Function;
    showCancelButton?: boolean;
    onCancel?: Function;
    expense?: ExpenseType;
}