import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

export React from 'react';
export { shallow, mount } from 'enzyme';
chai.use(chaiEnzyme());
export const expect = chai.expect;
export lodash from 'lodash';
