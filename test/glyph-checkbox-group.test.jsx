import React from 'react';
import {shallow, render, mount} from 'enzyme';
import {expect} from 'chai';
import GlyphCheckboxGroup from '../src/glyph-checkbox-group';

describe('Testing <GlyphCheckboxGroup/>', function () {
  it(`<GlyphCheckboxGroup/> can't be instantiated w/o props glyphs/onChanges` +
    `/exposeInputNodes`,
  function () {
    expect(shallow.bind(undefined, <GlyphCheckboxGroup/>)).to.throw(
      'undefined is not an object');
  });

  it(`<GlyphCheckboxGroup/> can be instantiated with props glyphs/onChanges` +
    `/exposeInputNodes`,
  function () {
    shallow(
      <GlyphCheckboxGroup
        glyphs={['pencil']}
        onChanges={{
          pencil: () => {},
        }}
        exposeInputNodes={{
          pencil: () => {},
        }}
      />
    );
  });

  it(`<GlyphCheckboxGroup/> contains checkboxes with glyphs`, function () {
    const wrapper = render(
      <GlyphCheckboxGroup
        glyphs={['pencil', 'save']}
        onChanges={{
          pencil: () => {},
          save: () => {},
        }}
        exposeInputNodes={{
          pencil: () => {},
          save: () => {},
        }}
      />
    );

    const inputs = wrapper.find('input');
    const labels = wrapper.find('label');

    expect(inputs).to.have.length(2);
    expect(labels).to.have.length(2);

    expect(wrapper).to.have.className('btn-group');
  });

  it(`<GlyphCheckboxGroup/> can receive more class names`, function () {
    const wrapper = shallow(
      <GlyphCheckboxGroup
        glyphs={['pencil', 'save']}
        onChanges={{
          pencil: () => {},
          save: () => {},
        }}
        exposeInputNodes={{
          pencil: () => {},
          save: () => {},
        }}
        checkGroupAddClass="btn-group-added"
        checkAddClasses={{
          pencil: 'pencil-input-class-added',
          save: 'save-input-class-added',
        }}
        glyphAddClasses={{
          pencil: 'pencil-glyph-class-added',
          save: 'save-glyph-class-added',
        }}
      />
    );

    expect(wrapper).to.have.className('btn-group');
    expect(wrapper).to.have.className('btn-group-added');

    expect(wrapper.html()).to.match(
      /<span class="glyph-checkbox pencil-input-class-added"><input type="checkbox" id="glyph-checkbox\d*" name="glyph-checkbox\d*"\/><label for="glyph-checkbox\d*" class="fa fa-pencil pencil-glyph-class-added"><\/label><\/span>/
    );
    expect(wrapper.html()).to.match(
      /<span class="glyph-checkbox save-input-class-added"><input type="checkbox" id="glyph-checkbox\d*" name="glyph-checkbox\d*"\/><label for="glyph-checkbox\d*" class="fa fa-save save-glyph-class-added"><\/label><\/span>/
    );
  });

  it(`<GlyphCheckboxGroup/>'s default class names can be overridden`,
  function () {
    const wrapper = shallow(
      <GlyphCheckboxGroup
        glyphs={['pencil', 'save']}
        onChanges={{
          pencil: () => {},
          save: () => {},
        }}
        exposeInputNodes={{
          pencil: () => {},
          save: () => {},
        }}
        checkGroupAddClass="btn-group-added"
        checkAddClasses={{
          pencil: 'pencil-input-class-added',
          save: 'save-input-class-added',
        }}
        glyphAddClasses={{
          pencil: 'pencil-glyph-class-added',
          save: 'save-glyph-class-added',
        }}
        checkGroupBaseClass="btn-group-replaced"
        checkGroupAddClass="btn-group-added"
        checkBaseClasses={{
          pencil: 'pencil-input-class-replaced',
          save: 'save-input-class-replaced',
        }}
        checkAddClasses={{
          pencil: 'pencil-input-class-added',
          save: 'save-input-class-added',
        }}
        glyphBaseClasses={{
          pencil: 'pencil-glyph-class-replaced',
          save: 'save-glyph-class-replaced',
        }}
        glyphAddClasses={{
          pencil: 'pencil-glyph-class-added',
          save: 'save-glyph-class-added',
        }}
      />
    );

    expect(wrapper).to.have.className('btn-group-replaced');
    expect(wrapper).to.have.className('btn-group-added');
    expect(wrapper).not.to.have.className('btn-group');

    expect(wrapper.html()).to.match(
      /<span class="pencil-input-class-replaced pencil-input-class-added"><input type="checkbox" id="glyph-checkbox\d*" name="glyph-checkbox\d*"\/><label for="glyph-checkbox\d*" class="pencil-glyph-class-replaced-pencil pencil-glyph-class-added"><\/label><\/span>/
    );
    expect(wrapper.html()).to.match(
      /<span class="save-input-class-replaced save-input-class-added"><input type="checkbox" id="glyph-checkbox\d*" name="glyph-checkbox\d*"\/><label for="glyph-checkbox\d*" class="save-glyph-class-replaced-save save-glyph-class-added"><\/label><\/span>/
    );
  });

  it(`<GlyphCheckboxGroup/>'s inputs can be checked`, function () {
    const refs = {};
    let nClicks = 0;

    const wrapper = mount(
      <GlyphCheckboxGroup
        glyphs={['pencil', 'save']}
        onChanges={{
          pencil: () => {
            if (refs.pencilNode.checked) {
              nClicks++;
            }
          },
          save: () => {
            if (refs.saveNode.checked) {
              nClicks++;
            }
          },
        }}
        exposeInputNodes={{
          pencil: node => {
            refs.pencilNode = node;
          },
          save: node => {
            refs.saveNode = node;
          },
        }}
        checkAddClasses={{
          pencil: 'btn-pencil',
          save: 'btn-save',
        }}
      />
    );

    const pencilButton = wrapper.find('.btn-pencil input');
    const saveButton = wrapper.find('.btn-save input');

    expect(nClicks).to.equal(0);
    refs.pencilNode.checked = true;
    pencilButton.simulate('change');
    expect(nClicks).to.equal(1);
    refs.pencilNode.checked = false;
    pencilButton.simulate('change');
    expect(nClicks).to.equal(1);
    refs.saveNode.checked = true;
    saveButton.simulate('change');
    expect(nClicks).to.equal(2);
    saveButton.simulate('change');
    expect(nClicks).to.equal(3);
  });
});
