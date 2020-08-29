import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from './../../reducers/form';
import { submitForm } from './../../actions';
import { CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS } from './../../constants/steps';
import ChooseShop from './chooseShop';

const Checkout = ({ step, goToPreview }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { shopId, userName, color } = state;

  const handleSubmitForm = values => { dispatch(submitForm(values)) };

  switch (step) {
    case PREVIEW:
      return null;
    case SUBMIT_SUCCESS:
    return null;
    case CHOOSE_SHOP:
    default:
      return <ChooseShop shopId={shopId} userName={userName} color={color} handleSubmitForm={handleSubmitForm} goToPreview={goToPreview} />;
  }
}

Checkout.propTypes = {
  step: PropTypes.oneOf([CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS]),
  goToPreview: PropTypes.func.isRequired
}

export default Checkout;
