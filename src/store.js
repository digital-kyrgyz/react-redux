let initalState = {
  title: "Title",
  count: 0,
};

const store = creatStore((state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE": {
      return state;
    }
    default:
      return state;
  }
});

export const setTitle = () => ({ type: "SET_TITLE" });

window.store = store;
export default store;
