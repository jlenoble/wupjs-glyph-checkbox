# wupjs-glyph-checkbox
Generic checkbox using React

## Content

* [Usage](#usage)
* [Required properties](#required-properties)
  * [glyph](#glyph)
  * [onChange](#onchange)
  * [exposeInputNode](#exposeinputnode)
* [Theming GlyphCheckbox](#theming-glyphcheckbox)
* [Overriding GlyphCheckbox defaults](#overriding-glyphcheckbox-defaults)
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
    onChange={e => {
      console.log(inputNode.checked);
    }}
    exposeInputNode={node => {
      inputNode = node;
    }}
  />
</div>, document.getElementById('app'));
```

## Required properties

### `glyph`

By default, `glyph` is the name of a character as defined by [Font Awesome](http://fontawesome.io/icons/). You could use it in combination with property `glyphBaseClass` to use a totally different character set. See [Overriding GlyphCheckbox defaults](#overriding-glyphcheckbox-defaults).

### `onChange`

`onChange` property must be a function which will be called whenever the checkbox is changed. As the component is purely representational, the function knows nothing of its state or props. To access the input check state, you must first expose the input node using the third required prop:

### `exposeInputNode`

`exposeInputNode` is a callback that sets a reference to the input node, allowing the calling parent to work with its child data. See [Usage](#usage) for an example.

## Theming GlyphCheckbox

There are two props provided to help theme the component: `checkAddClass` and `glyphAddClass`. The first one helps with the placement, sizing, etc. The second one helps theme the symbol within the label. But they come on top of the Bootstrap and Font Awesome defaults. See below to override them.

## Overriding GlyphCheckbox defaults

To override Bootstrap classes, use property `checkBaseClass`.

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
    onChange={() => {
      console.log('change ?');
    }}
    glyphBaseClass='my'
  />
  <GlyphCheckbox
    glyph="ellipsis"
    onChange={() => {
      console.log('click ...');
    }}
    glyphBaseClass='my'
  />
</div>, document.getElementById('app'));
```

## GlyphCheckboxGroup

This React component helps deal with several checkboxes in association, that is they should be displayed together and share a common theme.

```js
import React from 'react';
import {render} from 'react-dom';
import {GlyphCheckboxGroup} from 'wupjs-glyph-checkbox';

let inputNode1, inputNode2, inputNode3;

render(<div>
  <h5>GlyphCheckboxGroup</h5>
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
</div>, document.getElementById('app'));
```

GlyphCheckboxGroup has the same properties as GlyphCheckbox, but with the plural mark (`s` appended, yielding `glyphs`, `onChanges`, `exposeInputNodes`, `checkBaseClasses`, `checkAddClasses`, `glyphBaseClasses`, `glyphAddClasses`).

`glyphs` is an array of strings, th others are objects mapping to the strings in `glyphs`.

Moreover two props are provided to theme the group itself: `checkGroupBaseClass` and `checkGroupAddClass`.

## License

wupjs-glyph-checkbox is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
