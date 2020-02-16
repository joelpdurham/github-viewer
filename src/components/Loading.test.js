import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from './Loading';
import { Provider } from 'react-redux';
import store from '../store';

describe('LOADING SNAPSHOT ', () => {
  it('renders Loading', () => {
    const wrapper = shallow(<Provider store={store}><Loading /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
