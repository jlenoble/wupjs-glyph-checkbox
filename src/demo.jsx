import React from 'react';
import {render} from 'react-dom';
import GlyphCheckbox from './glyph-checkbox';

let inputNode;

render(<div>
  <h5>GlyphCheckbox</h5>
  <GlyphCheckbox
    glyph="check"
    onChange={e => {
      console.log(inputNode.checked);
    }}
    exposeInputNode={node => {
      inputNode = node;
    }}
  />
  <GlyphCheckbox
    glyph="clock-o"
    onChange={e => {
      console.log(inputNode.checked);
    }}
    exposeInputNode={node => {
      inputNode = node;
    }}
  />
  <GlyphCheckbox
    glyph="save"
    onChange={e => {
      console.log(inputNode.checked);
    }}
    exposeInputNode={node => {
      inputNode = node;
    }}
  />
  Hello world!
</div>, document.getElementById('app'));
