'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _uid = 0;
var getUid = function getUid() {
  return 'glyph-checkbox' + _uid++;
};

var GlyphCheckbox = function GlyphCheckbox(_ref) {
  var glyph = _ref.glyph,
      exposeInputNode = _ref.exposeInputNode,
      onChange = _ref.onChange,
      defaultChecked = _ref.defaultChecked,
      checkBaseClass = _ref.checkBaseClass,
      checkAddClass = _ref.checkAddClass,
      glyphBaseClass = _ref.glyphBaseClass,
      glyphAddClass = _ref.glyphAddClass;

  var uid = getUid();
  var _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || 'fa fa-' + glyph;

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(checkBaseClass, checkAddClass) },
    _react2.default.createElement('input', {
      id: uid,
      name: uid,
      type: 'checkbox',
      onChange: onChange,
      defaultChecked: defaultChecked,
      ref: function ref(node) {
        exposeInputNode(node);
      }
    }),
    _react2.default.createElement('label', {
      htmlFor: uid,
      className: (0, _classnames2.default)(_glyphBaseClass, glyphAddClass)
    })
  );
};

GlyphCheckbox.propTypes = {
  glyph: _react.PropTypes.string.isRequired,
  exposeInputNode: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  defaultChecked: _react.PropTypes.bool,
  checkBaseClass: _react.PropTypes.string,
  checkAddClass: _react.PropTypes.string,
  glyphBaseClass: _react.PropTypes.string,
  glyphAddClass: _react.PropTypes.string
};

GlyphCheckbox.defaultProps = {
  checkBaseClass: 'glyph-checkbox'
};

exports.default = GlyphCheckbox;
module.exports = exports['default'];