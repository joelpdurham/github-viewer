import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe.skip('APP SNAPSHOT ', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
