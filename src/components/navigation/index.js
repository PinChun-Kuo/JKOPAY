import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS } from './../../constants/steps';

const Navigation = ({ step }) => (
  <div className='navigation-wrapper'>
    <ul className='navigation'>
      <li className='navigation__step'>
        <div className={classNames('navigation__step-number', { 'active': (step === CHOOSE_SHOP) })}>1</div>
      </li>
      <li className='navigation__step'>
        <i className='arrow-right-icon navigation__step-arrow'></i>
      </li>
      <li className='navigation__step'>
        <div className={classNames('navigation__step-number', { 'active': (step === PREVIEW) })}>2</div>
      </li>
      <li className='navigation__step'>
        <i className='arrow-right-icon navigation__step-arrow'></i>
      </li>
      <li className='navigation__step'>
        <div className={classNames('navigation__step-number', { 'active': (step === SUBMIT_SUCCESS) })}>3</div>
      </li>
    </ul>
  </div>
)

Navigation.propTypes = {
  step: PropTypes.oneOf([CHOOSE_SHOP, PREVIEW, SUBMIT_SUCCESS])
}

export default Navigation;
