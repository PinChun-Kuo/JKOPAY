import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from './../../reducers/form';
import { resetForm, submitForm } from './../../actions';
import { CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS } from './../../constants/steps';
import ChooseShop from './chooseShop';
import Preview from './preview';
import SubmitSuccess from './submitSuccess';

const Checkout = ({ step, goToChooseShop, goToPreview, goToSubmitSuccess }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { shopId, userName, color } = state;

  const handleResetForm = () => { dispatch(resetForm) };
  const handleSubmitForm = values => { dispatch(submitForm(values)) };

  switch (step) {
    case PREVIEW:
      return <Preview shopId={shopId} userName={userName} goToChooseShop={goToChooseShop} goToSubmitSuccess={goToSubmitSuccess} />;
    case SUBMIT_SUCCESS:
      return <SubmitSuccess handleResetForm={handleResetForm} goToChooseShop={goToChooseShop} />;
    case CHOOSE_SHOP:
    default:
      return <ChooseShop shopId={shopId} userName={userName} color={color} handleSubmitForm={handleSubmitForm} goToPreview={goToPreview} />;
  }
}

Checkout.propTypes = {
  step: PropTypes.oneOf([CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS]),
  goToChooseShop: PropTypes.func.isRequired,
  goToPreview: PropTypes.func.isRequired,
  goToSubmitSuccess: PropTypes.func.isRequired
}

export default Checkout;
