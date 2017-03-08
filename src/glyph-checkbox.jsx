import React, {PropTypes} from 'react';
import classnames from 'classnames';

let _uid = 0;
const getUid = () => 'glyph-checkbox' + (_uid++);

const GlyphCheckbox = ({glyph, exposeInputNode, onChange, defaultChecked,
  checkBaseClass, checkAddClass, glyphBaseClass, glyphAddClass}) => {
  const uid = getUid();
  const _glyphBaseClass = (glyphBaseClass && (glyphBaseClass + '-' + glyph)) ||
    `fa fa-${glyph}`;

  return (
    <span className={classnames(checkBaseClass, checkAddClass)}>
      <input
        id={uid}
        name={uid}
        type="checkbox"
        onChange={onChange}
        defaultChecked={defaultChecked}
        ref={node => {
          exposeInputNode(node);
        }}
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
  exposeInputNode: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  checkBaseClass: PropTypes.string,
  checkAddClass: PropTypes.string,
  glyphBaseClass: PropTypes.string,
  glyphAddClass: PropTypes.string,
};

GlyphCheckbox.defaultProps = {
  checkBaseClass: 'glyph-checkbox',
};

export default GlyphCheckbox;
