
const initialData = {
  listName: "personalInfo",
  data: []
  
};

const fieldFormReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'CONSOLE_LOG_HI':
        console.log(" Console log from field reducer")
        return {
          ...state,
          data: [action.data]
        };
     
    default:
      return state;
  }
};

export default fieldFormReducer;
