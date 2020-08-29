import { CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS } from './../constants/steps';
import { SUBMIT_FORM } from './../constants/form'

export const chooseShop = { type: CHOOSE_SHOP };
export const preview = { type: PREVIEW };
export const submitSuccess = { type: SUBMIT_SUCCESS };

export const submitForm = values => ({
  type: SUBMIT_FORM,
  payload: { ...values }
});
