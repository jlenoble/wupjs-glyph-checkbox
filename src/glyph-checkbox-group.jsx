import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GlyphCheckbox from './glyph-checkbox';

const GlyphCheckboxGroup = ({
  glyphs, onChecks, onUnchecks, checked,
  checkGroupBaseClass, checkGroupAddClass,
  checkBaseClasses, checkAddClasses,
  glyphBaseClasses, glyphAddClasses,
}) => {
  return (
    <div
      className={classnames(checkGroupBaseClass, checkGroupAddClass)}
      role="group"
    >
      {glyphs.map(glyph => (
        <GlyphCheckbox
          key={glyph}
          glyph={glyph}
          onCheck={onChecks[glyph]}
          onUncheck={onUnchecks[glyph]}
          checked={checked[glyph]}
          checkBaseClass={checkBaseClasses[glyph]}
          checkAddClass={checkAddClasses[glyph]}
          glyphBaseClass={glyphBaseClasses[glyph]}
          glyphAddClass={glyphAddClasses[glyph]}
        />
      ))}
    </div>
  );
};

GlyphCheckboxGroup.propTypes = {
  glyphs: PropTypes.array.isRequired,
  onChecks: PropTypes.object,
  onUnchecks: PropTypes.object,
  checked: PropTypes.object,
  checkGroupBaseClass: PropTypes.string,
  checkGroupAddClass: PropTypes.string,
  checkBaseClasses: PropTypes.object,
  checkAddClasses: PropTypes.object,
  glyphBaseClasses: PropTypes.object,
  glyphAddClasses: PropTypes.object,
};

GlyphCheckboxGroup.defaultProps = {
  checkGroupBaseClass: 'btn-group',
  onChecks: {},
  onUnchecks: {},
  checked: {},
  checkBaseClasses: {},
  checkAddClasses: {},
  glyphBaseClasses: {},
  glyphAddClasses: {},
};

export default GlyphCheckboxGroup;
