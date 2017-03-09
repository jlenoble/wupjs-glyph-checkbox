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
        exposeInputNode={node => {}}
      />
    );
  });

  it(`<GlyphCheckbox/> contains an input[type="checkbox"]`, function () {
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {}}
        exposeInputNode={node => {}}
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
        exposeInputNode={node => {}}
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
        exposeInputNode={node => {}}
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
        exposeInputNode={node => {}}
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
    const wrapper = shallow(
      <GlyphCheckbox
        glyph="pencil"
        onChange={() => {
          nClicks++;
        }}
        exposeInputNode={node => {}}
      />
    );

    const input = wrapper.find('input');

    expect(nClicks).to.equal(0);
    input.simulate('change');
    expect(nClicks).to.equal(1);
    input.simulate('change');
    expect(nClicks).to.equal(2);
  });

  it(`<GlyphCheckbox/> can be changed and state recovered`, function () {
    const refs = {};
    let checked = false;

    const wrapper = mount(
      <GlyphCheckbox
        glyph="pencil"
        onChange={e => {
          checked = refs.inputNode.checked;
        }}
        exposeInputNode={node => {
          refs.inputNode = node;
        }}
      />
    );

    const input = wrapper.find('input');

    input.simulate('change');
    expect(checked).to.be.false;

    refs.inputNode.checked = true;
    expect(checked).to.be.false;
    input.simulate('change');
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
