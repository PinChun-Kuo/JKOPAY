import React, { useReducer } from 'react';

import { initialState, reducer } from './../reducers/steps';
import { chooseShop, preview, submitSuccess, submitForm } from './../actions';
import Navigation from './navigation';
import Checkout from './checkout';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const goToChooseShop = () => { dispatch(chooseShop) };
  const goToPreview = () => { dispatch(preview) };
  const goToSubmitSuccess = () => { dispatch(submitSuccess) };

  return (
    <div className=''>
      <Navigation step={state.step} />
      <Checkout
        step={state.step}
        goToChooseShop={goToChooseShop}
        goToPreview={goToPreview}
        goToSubmitSuccess={goToSubmitSuccess}
      />
    </div>
  )
}

export default App;
