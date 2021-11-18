const initialState = {
  pages: [],
};

const pages = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PAGES":
      return { 
        pages: [...state.pages, payload ]
      };
    case "REMOVE_PAGES":
      return { 
        pages: []
      };
    default:
      return state;
  }
};

export default pages;

export const addPages = (pages) => {
  return {
    type: "ADD_PAGES",
    payload: pages,
  };
};

export const removePages = () => {
  return {
    type: "REMOVE_PAGES",
  };
};
