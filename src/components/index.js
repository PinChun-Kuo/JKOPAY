import React, { useReducer } from 'react';

import { initialState, reducer } from './../reducers/steps';
import { preview } from './../actions';
import Navigation from './navigation';
import Checkout from './checkout';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const goToPreview = () => { dispatch(preview) };

  return (
    <div className=''>
      <Navigation step={state.step} />
      <Checkout
        step={state.step}
        goToPreview={goToPreview}
      />
    </div>
  )
}

export default App;
