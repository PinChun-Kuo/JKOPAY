import { SUBMIT_FORM } from './../constants/form';

export const initialState = {
  shopId: 0,
  userName: '',
  color: '',
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_FORM:
      return { ...payload };
    default:
      return state;
  }
};
