import {
  ADD_TO_COMPARE,
  EMPTY_COMPARE,
  REMOVE_FROM_COMPARE,
} from "../constants/cartConstants";

export const compareReducer = (
  state = { compareItems: [] },
  { type, payload }
) => {
  switch (type) {
    case ADD_TO_COMPARE:
      const item = payload;
      const isItemExist = state.compareItems.find(
        (el) => el.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          compareItems: state.compareItems.map((el) =>
            el.product === isItemExist.product ? item : el
          ),
        };
      } else {
        return {
          ...state,
          compareItems: [...state.compareItems, item],
        };
      }
    case REMOVE_FROM_COMPARE:
      return {
        ...state,
        compareItems: state.compareItems.filter((el) => el.product !== payload),
      };
    case EMPTY_COMPARE:
      return {
        ...state,
        compareItems: [],
      };

    default:
      return state;
  }
};
