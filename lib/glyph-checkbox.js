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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _uid = 0;
var getUid = function getUid() {
  return 'glyph-checkbox' + _uid++;
};

var GlyphCheckbox = function GlyphCheckbox(_ref) {
  var glyph = _ref.glyph,
      onCheck = _ref.onCheck,
      onUncheck = _ref.onUncheck,
      checked = _ref.checked,
      checkBaseClass = _ref.checkBaseClass,
      checkAddClass = _ref.checkAddClass,
      glyphBaseClass = _ref.glyphBaseClass,
      glyphAddClass = _ref.glyphAddClass;

  var uid = getUid();
  var _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || 'fa fa-' + glyph;
  var onChange = onCheck || onUncheck ? function (e) {
    if (e.target.checked) {
      onCheck && onCheck(e);
    } else {
      onUncheck && onUncheck(e);
    }
  } : undefined;

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(checkBaseClass, checkAddClass) },
    _react2.default.createElement('input', {
      id: uid,
      name: uid,
      type: 'checkbox',
      onChange: onChange,
      checked: checked
    }),
    _react2.default.createElement('label', {
      htmlFor: uid,
      className: (0, _classnames2.default)(_glyphBaseClass, glyphAddClass)
    })
  );
};

GlyphCheckbox.propTypes = {
  glyph: _propTypes2.default.string.isRequired,
  onCheck: _propTypes2.default.func,
  onUncheck: _propTypes2.default.func,
  checked: _propTypes2.default.bool,
  checkBaseClass: _propTypes2.default.string,
  checkAddClass: _propTypes2.default.string,
  glyphBaseClass: _propTypes2.default.string,
  glyphAddClass: _propTypes2.default.string
};

GlyphCheckbox.defaultProps = {
  checkBaseClass: 'glyph-checkbox'
};

exports.default = GlyphCheckbox;
module.exports = exports['default'];