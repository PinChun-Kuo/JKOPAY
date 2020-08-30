import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withFormik, Field } from 'formik';

import { fakeShops } from './../../data/shops';
import { fakeColors } from './../../data/colors';

const userNameRule = /^.[\u4e00-\u9fa5_a-zA-Z0-9]{0,25}$/;

const ChooseShop = ({ values, handleSubmit }) => {
  const [selectedColor, setSelectedColor] = useState(values.color);
  const disabled = (values.shopId == 0) || !values.userName.match(userNameRule) || !selectedColor;

  useEffect(() => {
    values.color = selectedColor;
  }, [selectedColor])

  return (
    <div className='choose-shop'>
      <form className='choose-shop__form' onSubmit={handleSubmit}>
        <div className='form-body'>
          <div className='form-body__title'>
            選擇店舖
          </div>
          <div className='form-body__content'>
            <label className='form-label'>指定發送店舖</label>
            <Field className='form-field' as='select' name='shopId'>
              {
                fakeShops.map(shop => (
                  <option value={shop.id}>{shop.name}</option>
                ))
              }
            </Field>
            <label className='form-label'>
              <span>名稱</span>
              {
                (values.shopId != 0) && (
                  <span className='form-help'>此名稱是方便您辨識，用戶無法看到</span>
                )
              }
            </label>
            <Field className='form-field' type='text' name='userName' placeholder='名稱最多25個字' />
            <label className='form-label'>票券顏色</label>
            <div className='form-group'>
              {
                fakeColors.map(color => (
                  <button
                    className={classNames('color-btn', color, { 'selected': selectedColor === color })}
                    type='button'
                    value={color}
                    onClick={(selectedColor === color) ? null : (e => {
                      setSelectedColor(e.target.value)
                    })}
                  >
                    <i className='tick-icon'></i>
                  </button>
                ))
              }
            </div>
          </div>
        </div>
        <div className='form-footer'>
          <button
            className={classNames('submit-btn btn btn-primary', {'disabled': disabled})}
            type='submit'
            disabled={disabled}
          >
            下一步，預覽
          </button>
        </div>
      </form>
    </div>
  )
}

ChooseShop.propTypes = {
  values: PropTypes.shape({
    shopId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  handleSubmit: PropTypes.func.isRequired
}

export default withFormik({
  mapPropsToValues: ({ shopId, userName, color }) => ({
    shopId,
    userName,
    color
  }),
  validate: ({ shopId, userName, color }) => {
    const errors = {};

    if (!shopId) {
      errors.shopId = 'Required';
    }

    if (!userName) {
      errors.userName = 'Required';
    } else if (!userName.match(userNameRule)) {
      errors.userName = 'Invalid username';
    }

    if (!color) {
      errors.color = 'Required';
    }

    return errors;
  },
  handleSubmit: ({ shopId, userName, color }, { props }) => {
    const { handleSubmitForm, goToPreview } = props;

    handleSubmitForm({
      shopId: Number(shopId),
      userName,
      color
    });
    goToPreview();
  }
})(ChooseShop);
