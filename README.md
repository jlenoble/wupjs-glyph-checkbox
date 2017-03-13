# wupjs-glyph-checkbox
Generic checkbox using React

## Content

* [Usage](#usage)
* [Properties](#properties)
  * [glyph](#glyph)
  * [onCheck](#oncheck),
  * [onUncheck](#onuncheck),
  * [checked](#checked),
  * [checkBaseClass](#checkbaseclass),
  * [checkAddClass](#checkaddclass),
  * [glyphBaseClass](#glyphbaseclass),
  * [glyphAddClass](#glyphaddclass),
* [GlyphCheckboxGroup](#glyphcheckboxgroup)

## Usage

A glyph checkbox is a purely representational React component. It has as label a single symbol character. By default, we use [Bootstrap 4](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/) classes to theme the component. But these settings can be overridden.

```js
import React from 'react';
import {render} from 'react-dom';
import {GlyphCheckbox} from 'wupjs-glyph-checkbox';

let inputNode;

render(<div>
  <h5>GlyphCheckbox</h5>
  <GlyphCheckbox
    glyph="check"
    onCheck={e => {
      console.log(e.target.checked);
    }}
    onUncheck={e => {
      console.log(e.target.checked);
    }}
  />
</div>, document.getElementById('app'));
```

## Properties

### `glyph`

By default, `glyph` is the name of a character as defined by [Font Awesome](http://fontawesome.io/icons/). You could use it in combination with property `glyphBaseClass` to use a totally different character set. See [glyphBaseClass](#glyphbaseclass).

### `onCheck`

`onCheck` property must be a function which will be called whenever the checkbox is checked. It takes as sole argument the event `e` originally passed to the `onChange` property on the underlying `input[type="checkbox"]` node. Therefore you can access the firing node as `e.target` and change the checked value through `e.target.checked`.

### `onUncheck`

`onUncheck` property must be a function which will be called whenever the checkbox is unchecked. It takes as sole argument the event `e` originally passed to the `onChange` property on the underlying `input[type="checkbox"]` node. Therefore you can access the firing node as `e.target` and change the checked value through `e.target.checked`.

### `checked`

`checked` property is the boolean that controls the state of the checkbox, checked (`true`) or unchecked (`false`);

### `checkBaseClass`

To override Bootstrap classes, use property `checkBaseClass`. It will replace the default `btn btn-secondary` classes by whatever you need.

### `glyphBaseClass`

To change the fonts, you have to use `glyphBaseClass`. By default, the classes used to theme them are formed by concatenating the string `"fa fa-"` with the value of the `glyph` prop. This works well with the CSS of Font Awesome. Now you can use your own CSS and own naming scheme.

```css
.my-question-mark::before {
  content: '?';
}
.my-ellipsis::before {
  content: '...';
}
```

```js
import React from 'react';
import {render} from 'react-dom';
import {GlyphCheckbox} from 'wupjs-glyph-checkbox';

render(<div>
  <h5>Themed GlyphCheckboxes</h5>
  <GlyphCheckbox
    glyph="question-mark"
    onCheck={() => {
      console.log('check ?');
    }}
    glyphBaseClass='my'
  />
  <GlyphCheckbox
    glyph="ellipsis"
    onCheck={() => {
      console.log('check ...');
    }}
    glyphBaseClass='my'
  />
</div>, document.getElementById('app'));
```

### `checkAddClass`

`checkAddClass` property helps theme the outter wrapper of the component, therefore allowing to alter its overall characteristics such as placement, sizing...

### `glyphAddClass`

`glyphAddClass` property helps theme the symbol within the label, e.g. altering its color, backgroung or size.

## GlyphCheckboxGroup

This React component helps deal with several checkboxes in association, that is they should be displayed together and share a common theme.

```js
import React from 'react';
import {render} from 'react-dom';
import {GlyphCheckboxGroup} from 'wupjs-glyph-checkbox';

render(<div>
  <h5>GlyphCheckboxGroup</h5>
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
</div>, document.getElementById('app'));
```

GlyphCheckboxGroup has the same properties as GlyphCheckbox, but with the plural mark (`s` appended, yielding `glyphs`, `onChecks`, `onUnchecks`, `checkBaseClasses`, `checkAddClasses`, `glyphBaseClasses`, `glyphAddClasses`), except for the `checked` property which takes no `s` (it looked too wierd!).

`glyphs` is an array of strings, th others are objects mapping to the strings in `glyphs`.

Moreover two props are provided to theme the group itself: `checkGroupBaseClass` and `checkGroupAddClass`.

## License

wupjs-glyph-checkbox is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
