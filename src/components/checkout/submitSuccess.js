import React from 'react';
import PropTypes from 'prop-types';

const SubmitSuccess = ({ handleResetForm, goToChooseShop }) => {
  setTimeout(() => {
    handleResetForm();
    goToChooseShop();
  }, 3000);

  return (
    <div className='submit-success-wrapper'>
      <div className='submit-success-content'>
        <p className='submit-success-msg'>Congratulation, you have submitted successfully.</p>
      </div>
    </div>
  )
}

SubmitSuccess.propTypes = {
  handleResetForm: PropTypes.func.isRequired,
  goToChooseShop: PropTypes.func.isRequired
}

export default SubmitSuccess;
