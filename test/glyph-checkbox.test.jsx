import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import GlyphCheckbox from '../src/glyph-checkbox';

describe('Testing <GlyphCheckbox/>', function () {
  it(`<GlyphCheckbox/> can be instantiated with no props`, function () {
    shallow(
      <GlyphCheckbox/>
    );
  });

  it(`<GlyphCheckbox/> can be instantiated with props`, function () {
    shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {}}
      />
    );
  });

  it(`<GlyphCheckbox/> contains an input[type="checkbox"]`, function () {
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {}}
      />
    );

    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    expect(input).to.have.attr('type', 'checkbox');
  });

  it(`<GlyphCheckbox/> contains a glyph`, function () {
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {}}
      />
    );

    const label = wrapper.find('label');
    expect(label).to.have.length(1);

    expect(label).to.have.className('fa');
    expect(label).to.have.className('fa-pencil');
  });

  it(`<GlyphCheckbox/> can receive more class names`, function () {
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {}}
        checkAddClass="check-added"
        glyphAddClass="glyph-added"
      />
    );

    const check = wrapper.find('span');
    const label = wrapper.find('label');

    expect(check).to.have.length(1);
    expect(label).to.have.length(1);

    expect(check).to.have.className('glyph-checkbox');
    expect(check).to.have.className('check-added');

    expect(label).to.have.className('fa');
    expect(label).to.have.className('fa-pencil');
    expect(label).to.have.className('glyph-added');
  });

  it(`<GlyphCheckbox/>'s default class names can be overridden`, function () {
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {}}
        checkBaseClass="check-replaced"
        glyphBaseClass="glyph-replaced"
        checkAddClass="check-added"
        glyphAddClass="glyph-added"
      />
    );

    const check = wrapper.find('span');
    const label = wrapper.find('label');

    expect(check).to.have.length(1);
    expect(label).to.have.length(1);

    expect(check).not.to.have.className('glyph-checkbox');
    expect(check).to.have.className('check-replaced');
    expect(check).to.have.className('check-added');

    expect(label).not.to.have.className('fa');
    expect(label).not.to.have.className('fa-pencil');
    expect(label).to.have.className('glyph-replaced-pencil');
    expect(label).to.have.className('glyph-added');
  });

  it(`<GlyphCheckbox/> can fire a change event`, function () {
    let nClicks = 0;
    const e = {
      target: {},
    };

    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onCheck={() => {
          nClicks++;
        }}
        onUncheck={() => {
          nClicks--;
        }}
      />
    );

    const input = wrapper.find('input');

    expect(nClicks).to.equal(0);
    input.simulate('change', e);
    expect(nClicks).to.equal(-1);

    e.target.checked = true;
    input.simulate('change', e);
    expect(nClicks).to.equal(0);
    input.simulate('change', e);
    expect(nClicks).to.equal(1);

    e.target.checked = false;
    input.simulate('change', e);
    expect(nClicks).to.equal(0);
    input.simulate('change', e);
    expect(nClicks).to.equal(-1);
  });

  it(`<GlyphCheckbox/> can be changed and state recovered`, function () {
    let checked = false;
    const e = {
      target: {},
    };

    const wrapper = mount(
      <GlyphCheckbox
        glyph="pencil"
        onCheck={e => {
          checked = e.target.checked ? true : false;
        }}
      />
    );

    const input = wrapper.find('input');

    input.simulate('change', e);
    expect(checked).to.be.false;

    e.target.checked = true;
    expect(checked).to.be.false;
    input.simulate('change', e);
    expect(checked).to.be.true;
  });

  it(`<GlyphCheckbox/> with no onChange prop does nothing`, function () {
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
      />
    );

    const input = wrapper.find('input');

    expect(input.simulate.bind(input, 'change')).not.to.throw();
  });
});
