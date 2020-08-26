const initState = {
  num: 0
};
export function calc(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, num: state.num + 1 };
    case "REDUCE":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
}
