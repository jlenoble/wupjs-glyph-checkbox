import React, {PropTypes} from 'react';
import classnames from 'classnames';

let _uid = 0;
const getUid = () => 'glyph-checkbox' + (_uid++);

const GlyphCheckbox = ({glyph, onCheck, onUncheck, checked,
  checkBaseClass, checkAddClass, glyphBaseClass, glyphAddClass}) => {
  const uid = getUid();
  const _glyphBaseClass = (glyphBaseClass && (glyphBaseClass + '-' + glyph)) ||
    `fa fa-${glyph}`;
  const onChange = onCheck || onUncheck ? e => {
    if (e.target.checked) {
      onCheck && onCheck(e);
    } else {
      onUncheck && onUncheck(e);
    }
  } : undefined;

  return (
    <span className={classnames(checkBaseClass, checkAddClass)}>
      <input
        id={uid}
        name={uid}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={uid}
        className={classnames(_glyphBaseClass, glyphAddClass)}
      ></label>
    </span>
  );
};

GlyphCheckbox.propTypes = {
  glyph: PropTypes.string.isRequired,
  onCheck: PropTypes.func,
  onUncheck: PropTypes.func,
  checked: PropTypes.bool,
  checkBaseClass: PropTypes.string,
  checkAddClass: PropTypes.string,
  glyphBaseClass: PropTypes.string,
  glyphAddClass: PropTypes.string,
};

GlyphCheckbox.defaultProps = {
  checkBaseClass: 'glyph-checkbox',
};

export default GlyphCheckbox;
