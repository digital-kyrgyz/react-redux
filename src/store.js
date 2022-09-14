import { createStore } from "redux";

let initialState = {
  title: "Title Melis",
  count: 0,
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE": {
      let count = ++state.count;
      let title = "Title " + action.word;
      return { ...state, title, count };
    }
    default:
      return state;
  }
});

export const setTitle = (word) => ({ type: "SET_TITLE", word });

window.store = store;
export default store;
