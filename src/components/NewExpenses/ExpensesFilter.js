import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  
  const selectedChangeHandler = (event) => {
    
    props.onChangeFilter(event.target.value); 
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectedChangeHandler}>
          {/* в value передаём selected (two way data binding)*/}
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="All">Selected All</option>
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
