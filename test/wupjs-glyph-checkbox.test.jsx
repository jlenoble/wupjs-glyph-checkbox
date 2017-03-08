import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import WupjsGlyphCheckbox from '../src/wupjs-glyph-checkbox';

describe('Testing <WupjsGlyphCheckbox/>', function () {
  it(`Component <WupjsGlyphCheckbox/> says 'Hello!'`, function () {
    const wrapper = shallow(
      <WupjsGlyphCheckbox/>
    );

    expect(wrapper.find('h1').text()).to.equal('Hello!');
  });
});
