import React from 'react';
import {render} from 'react-dom';
import GlyphCheckbox from './glyph-checkbox';
import GlyphCheckboxGroup from './glyph-checkbox-group';

let inputNode;
let inputNode1;
let inputNode2;
let inputNode3;

render(<div>
  <h5>3 GlyphCheckboxes</h5>
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
  <h5>1 GlyphCheckboxGroup</h5>
  <GlyphCheckboxGroup
    glyphs={['check', 'clock-o', 'save']}
    onChanges={{
      'check': e => {
        console.log(inputNode1.checked);
      },
      'clock-o': e => {
        console.log(inputNode2.checked);
      },
      'save': e => {
        console.log(inputNode3.checked);
      },
    }}
    exposeInputNodes={{
      'check': node => {
        inputNode1 = node;
      },
      'clock-o': node => {
        inputNode2 = node;
      },
      'save': node => {
        inputNode3 = node;
      },
    }}
  />
  Hello world!
</div>, document.getElementById('app'));
