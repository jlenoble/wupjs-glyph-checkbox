import React from 'react';
import {shallow, render, mount} from 'enzyme';
import {expect} from 'chai';
import dom from 'jsdom-global';
import GlyphCheckboxGroup from '../src/glyph-checkbox-group';

describe('Testing <GlyphCheckboxGroup/>', function () {
  this.timeout(5000); // eslint-disable-line no-invalid-this

  beforeEach(function () {
    this.cleanup = dom(); // eslint-disable-line no-invalid-this
  });

  afterEach(function () {
    this.cleanup(); // eslint-disable-line no-invalid-this
  });

  it(`<GlyphCheckboxGroup/> can't be instantiated w/o props glyphs/onChanges`,
    function () {
      expect(shallow.bind(undefined, <GlyphCheckboxGroup/>)).to.throw();
    });

  it(`<GlyphCheckboxGroup/> can be instantiated with props glyphs/onChanges`,
    function () {
      shallow(
        <GlyphCheckboxGroup
          glyphs={['pencil']}
          onChecks={{
            pencil: () => {},
          }}
          onUnchecks={{
            pencil: () => {},
          }}
        />
      );
    });

  it(`<GlyphCheckboxGroup/> contains checkboxes with glyphs`, function () {
    const wrapper = render(
      <GlyphCheckboxGroup
        glyphs={['pencil', 'save']}
        onChecks={{
          pencil: () => {},
          save: () => {},
        }}
        onUnchecks={{
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
        onChecks={{
          pencil: () => {},
          save: () => {},
        }}
        onUnchecks={{
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
          onChecks={{
            pencil: () => {},
            save: () => {},
          }}
          onUnchecks={{
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
    let nClicks = 0;
    const e = {
      target: {},
    };

    const wrapper = mount(
      <GlyphCheckboxGroup
        glyphs={['pencil', 'save']}
        onChecks={{
          pencil: () => {
            nClicks++;
          },
          save: () => {
            nClicks--;
          },
        }}
        onUnchecks={{
          pencil: () => {
            nClicks += 10;
          },
          save: () => {
            nClicks -= 10;
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

    pencilButton.simulate('change', e);
    saveButton.simulate('change', e);
    expect(nClicks).to.equal(0);

    e.target.checked = true;
    pencilButton.simulate('change', e);
    expect(nClicks).to.equal(1);

    e.target.checked = false;
    pencilButton.simulate('change', e);
    expect(nClicks).to.equal(11);

    e.target.checked = true;
    saveButton.simulate('change', e);
    expect(nClicks).to.equal(10);

    saveButton.simulate('change', e);
    expect(nClicks).to.equal(9);
  });
});
