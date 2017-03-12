import React from 'react';
import {render} from 'react-dom';
import GlyphCheckbox from './glyph-checkbox';
import GlyphCheckboxGroup from './glyph-checkbox-group';

render(<div>
  <h5>3 GlyphCheckboxes</h5>
  <GlyphCheckbox
    glyph="check"
    onCheck={e => {
      console.log(e.target.checked);
    }}
    onUncheck={e => {
      console.log(e.target.checked);
    }}
  />
  <GlyphCheckbox
    glyph="clock-o"
    onCheck={e => {
      console.log(e.target.checked);
    }}
    onUncheck={e => {
      console.log(e.target.checked);
    }}
  />
  <GlyphCheckbox
    glyph="save"
    onCheck={e => {
      console.log(e.target.checked);
    }}
    onUncheck={e => {
      console.log(e.target.checked);
    }}
  />
  Hello world!
  <h5>1 GlyphCheckboxGroup</h5>
  <GlyphCheckboxGroup
    glyphs={['check', 'clock-o', 'save']}
    onChecks={{
      'check': e => {
        console.log(e.target.checked);
      },
      'clock-o': e => {
        console.log(e.target.checked);
      },
      'save': e => {
        console.log(e.target.checked);
      },
    }}
    onUnchecks={{
      'check': e => {
        console.log(e.target.checked);
      },
      'clock-o': e => {
        console.log(e.target.checked);
      },
      'save': e => {
        console.log(e.target.checked);
      },
    }}
  />
  Hello world!
</div>, document.getElementById('app'));
