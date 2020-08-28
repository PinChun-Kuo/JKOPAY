import React, { useState, useEffect, useReducer } from 'react';

import { initialState, reducer } from './../reducers/steps'
import Navigation from './navigation';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className=''>
      <Navigation step={state.step} />
    </div>
  )
}

export default App;
