import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PreviewRow = ({ title, titleClasses, content, contentClasses }) => (
  <div className='preview-row'>
    <div className={classNames('preview-row__title', titleClasses)}>
      {title}
    </div>
    <div className={classNames('preview-row__content', contentClasses)}>
      {content}
    </div>
  </div>
)

PreviewRow.propTypes = {
  title: PropTypes.string.isRequired,
  titleClasses: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentClasses: PropTypes.string,
}

export default PreviewRow;
