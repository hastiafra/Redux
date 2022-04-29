const getVisibleExpenses = (expenses, filters) => {

    const { sortBy, text, startDate, endDate } = filters;
  
    let filteredExpenses = expenses.filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      let searchText = text.toLowerCase();
      const textMatch = expense.description.toLowerCase().includes(searchText);
  
      return startDateMatch && endDateMatch && textMatch;
    });
  
    return filteredExpenses.sort((a, b) => {
        
      if (sortBy === "date") {
        return a.createdAt - b.createdAt;
      } else if(sortBy ==="amount"){
          return a.amount - b.amount;
      }
    })

    export default getVisibleExpenses; 