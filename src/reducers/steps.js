import { CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS } from './../constants/steps';

export const initialState = { step: CHOOSE_SHOP };

export const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case CHOOSE_SHOP:
      return { step: CHOOSE_SHOP };
    case PREVIEW:
      return { step: PREVIEW };
    case SUBMIT_SUCCESS:
      return { step: SUBMIT_SUCCESS }
    default:
      return state;
  }
};
