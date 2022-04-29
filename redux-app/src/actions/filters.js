export const setTextFilter = (text = "") => {
    return {
      type: "TEXT_FILTER",
      text,
    };
  };
  
export const sortByAmount = () => {
    return {
      type: "SORT_BY_AMOUNT",
    };
  };
  
export const sortByDate = () => {
    return {
      type: "SORT_BY_DATE",
    };
  };
  
export const setStartDate = (newDate) => {
    return {
      type: "SET_START_DATE",
      newDate,
    };
  };
  
export const setEndDate = (newDate) => {
    return {
      type: "SET_END_DATE",
      newDate,
    };
  };
