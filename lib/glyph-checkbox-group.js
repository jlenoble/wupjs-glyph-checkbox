'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _glyphCheckbox = require('./glyph-checkbox');

var _glyphCheckbox2 = _interopRequireDefault(_glyphCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GlyphCheckboxGroup = ({
  glyphs, onChecks, onUnchecks, checked,
  checkGroupBaseClass, checkGroupAddClass,
  checkBaseClasses, checkAddClasses,
  glyphBaseClasses, glyphAddClasses
}) => {
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(checkGroupBaseClass, checkGroupAddClass),
      role: 'group'
    },
    glyphs.map(glyph => _react2.default.createElement(_glyphCheckbox2.default, {
      key: glyph,
      glyph: glyph,
      onCheck: onChecks[glyph],
      onUncheck: onUnchecks[glyph],
      checked: checked[glyph],
      checkBaseClass: checkBaseClasses[glyph],
      checkAddClass: checkAddClasses[glyph],
      glyphBaseClass: glyphBaseClasses[glyph],
      glyphAddClass: glyphAddClasses[glyph]
    }))
  );
};

GlyphCheckboxGroup.propTypes = {
  glyphs: _propTypes2.default.array.isRequired,
  onChecks: _propTypes2.default.object,
  onUnchecks: _propTypes2.default.object,
  checked: _propTypes2.default.object,
  checkGroupBaseClass: _propTypes2.default.string,
  checkGroupAddClass: _propTypes2.default.string,
  checkBaseClasses: _propTypes2.default.object,
  checkAddClasses: _propTypes2.default.object,
  glyphBaseClasses: _propTypes2.default.object,
  glyphAddClasses: _propTypes2.default.object
};

GlyphCheckboxGroup.defaultProps = {
  checkGroupBaseClass: 'btn-group',
  onChecks: {},
  onUnchecks: {},
  checked: {},
  checkBaseClasses: {},
  checkAddClasses: {},
  glyphBaseClasses: {},
  glyphAddClasses: {}
};

exports.default = GlyphCheckboxGroup;
module.exports = exports.default;