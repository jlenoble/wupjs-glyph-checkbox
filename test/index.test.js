import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import './glyph-checkbox.test';
import './glyph-checkbox-group.test';

chai.use(chaiEnzyme());
