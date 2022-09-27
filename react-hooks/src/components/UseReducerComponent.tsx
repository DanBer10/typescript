export const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

export const counterReducer = (
  state: typeof initialState,
  action: ACTIONTYPES
) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("Bad action");
  }
};
