import React, {PropTypes} from 'react';
import classnames from 'classnames';
import GlyphCheckbox from './glyph-checkbox';

const GlyphCheckboxGroup = ({
  glyphs, exposeInputNodes, onChanges, defaultChecked,
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
          onChange={onChanges[glyph]}
          exposeInputNode={exposeInputNodes[glyph]}
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
  exposeInputNodes: PropTypes.object.isRequired,
  onChanges: PropTypes.object.isRequired,
  checkGroupBaseClass: PropTypes.string,
  checkGroupAddClass: PropTypes.string,
  checkBaseClasses: PropTypes.object,
  checkAddClasses: PropTypes.object,
  glyphBaseClasses: PropTypes.object,
  glyphAddClasses: PropTypes.object,
};

GlyphCheckboxGroup.defaultProps = {
  checkGroupBaseClass: 'btn-group',
  checkBaseClasses: {},
  checkAddClasses: {},
  glyphBaseClasses: {},
  glyphAddClasses: {},
};

export default GlyphCheckboxGroup;
