'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _glyphCheckbox = require('./glyph-checkbox');

var _glyphCheckbox2 = _interopRequireDefault(_glyphCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphCheckboxGroup = function GlyphCheckboxGroup(_ref) {
  var glyphs = _ref.glyphs,
      onChecks = _ref.onChecks,
      onUnchecks = _ref.onUnchecks,
      checked = _ref.checked,
      checkGroupBaseClass = _ref.checkGroupBaseClass,
      checkGroupAddClass = _ref.checkGroupAddClass,
      checkBaseClasses = _ref.checkBaseClasses,
      checkAddClasses = _ref.checkAddClasses,
      glyphBaseClasses = _ref.glyphBaseClasses,
      glyphAddClasses = _ref.glyphAddClasses;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(checkGroupBaseClass, checkGroupAddClass),
      role: 'group'
    },
    glyphs.map(function (glyph) {
      return _react2.default.createElement(_glyphCheckbox2.default, {
        key: glyph,
        glyph: glyph,
        onCheck: onChecks[glyph],
        onUncheck: onUnchecks[glyph],
        checked: checked[glyph],
        checkBaseClass: checkBaseClasses[glyph],
        checkAddClass: checkAddClasses[glyph],
        glyphBaseClass: glyphBaseClasses[glyph],
        glyphAddClass: glyphAddClasses[glyph]
      });
    })
  );
};

GlyphCheckboxGroup.propTypes = {
  glyphs: _react.PropTypes.array.isRequired,
  onChecks: _react.PropTypes.object,
  onUnchecks: _react.PropTypes.object,
  checked: _react.PropTypes.object,
  checkGroupBaseClass: _react.PropTypes.string,
  checkGroupAddClass: _react.PropTypes.string,
  checkBaseClasses: _react.PropTypes.object,
  checkAddClasses: _react.PropTypes.object,
  glyphBaseClasses: _react.PropTypes.object,
  glyphAddClasses: _react.PropTypes.object
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
module.exports = exports['default'];