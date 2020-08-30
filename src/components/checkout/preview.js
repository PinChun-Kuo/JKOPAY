import React from 'react';
import PropTypes from 'prop-types';

import { fakeShops } from './../../data/shops';
import PreviewRow from './previewRow';

const Preview = ({ shopId, userName, goToChooseShop, goToSubmitSuccess }) => {
  const shopName = fakeShops.find(shop => shop.id === shopId).name;

  return (
    <div className='preview-wrapper'>
      <div className='preview-content'>
        <div className='preview-block basic-info'>
          <div className='preview-title'>確認明細</div>
          <div className='preview-block__title'>基本資訊</div>
          <div className='preview-block__content'>
            <PreviewRow title={'名稱'} content={userName} />
            <PreviewRow title={'發送店舖'} content={shopName} />
          </div>
        </div>
        <div className='preview-block fee-info'>
          <div className='preview-block__title'>費用</div>
          <div className='preview-block__content'>
            <PreviewRow title={'發送費（預估）'} content={'$ 10'} contentClasses='red' />
            <PreviewRow title={'折抵費'} content={'$2 / 張'} />
          </div>
        </div>
        <div className='preview-block reminder-block'>
          <div className='preview-block__title'>小提醒</div>
          <ul className='reminders'>
            <li className='reminder'>發送費會每日結算前一天實際發送張數、並在下期請款時收取</li>
            <li className='reminder'>折抵費與折抵金額會依實際消費折抵情況收取</li>
          </ul>
          <div className='buttons'>
            <button className='btn btn-outline edit-btn' onClick={goToChooseShop}>修改設定</button>
            <button className='btn btn-primary submit-btn' onClick={goToSubmitSuccess}>確定發送</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Preview.propTypes = {
  shopId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  goToChooseShop: PropTypes.func.isRequired,
  goToSubmitSuccess: PropTypes.func.isRequired
}

export default Preview;
