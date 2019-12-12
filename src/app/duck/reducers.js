
const initialData = {
  listName: "personalInfo",
  name: "Jakiś Jan"
};

const fieldFormReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'CONSOLE_LOG_HI':
        console.log("hi")
        return {
          ...state,
        };
     
    default:
      return state;
  }
};

export default fieldFormReducer;
