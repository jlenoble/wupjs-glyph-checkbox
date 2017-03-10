import React from 'react';
import {render} from 'react-dom';
import GlyphCheckbox from './glyph-checkbox';
import GlyphCheckboxGroup from './glyph-checkbox-group';

let inputNodes = new Array(6);

render(<div>
  <h5>3 GlyphCheckboxes</h5>
  <GlyphCheckbox
    glyph="check"
    onChange={e => {
      console.log(inputNodes[0].checked);
    }}
    exposeInputNode={node => {
      inputNodes[0] = node;
    }}
  />
  <GlyphCheckbox
    glyph="clock-o"
    onChange={e => {
      console.log(inputNodes[1].checked);
    }}
    exposeInputNode={node => {
      inputNodes[1] = node;
    }}
  />
  <GlyphCheckbox
    glyph="save"
    onChange={e => {
      console.log(inputNodes[2].checked);
    }}
    exposeInputNode={node => {
      inputNodes[2] = node;
    }}
  />
  Hello world!
  <h5>1 GlyphCheckboxGroup</h5>
  <GlyphCheckboxGroup
    glyphs={['check', 'clock-o', 'save']}
    onChanges={{
      'check': e => {
        console.log(inputNodes[3].checked);
      },
      'clock-o': e => {
        console.log(inputNodes[4].checked);
      },
      'save': e => {
        console.log(inputNodes[5].checked);
      },
    }}
    exposeInputNodes={{
      'check': node => {
        inputNodes[3] = node;
      },
      'clock-o': node => {
        inputNodes[4] = node;
      },
      'save': node => {
        inputNodes[5] = node;
      },
    }}
  />
  Hello world!
</div>, document.getElementById('app'));
