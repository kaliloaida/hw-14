import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
		
    setFilteredYear(selectedYear);
  };

  
  const filteredExpenses = props.items.filter((expense) => {
    
    return expense.date.getFullYear().toString() === filteredYear;
  });

  


  return (
    <Card className="expenses"> 
      <ExpensesFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesChart 
      expenses={filteredExpenses}/> 
			


      
        <ExpensesList 
        expenses={filteredExpenses}   

        expenseYear={filteredYear}
         expenseItems={props.items}
         /> 
    </Card>
  );
};

export default Expenses;