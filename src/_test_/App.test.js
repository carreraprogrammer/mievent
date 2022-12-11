import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Country from '../Pages/Country';
import store from '../Redux/store';

it('Countries renders correctly', () => {
  const countries = renderer
    .create(<Provider store={store}><Country /></Provider>)
    .toJSON();
  expect(countries).toMatchSnapshot();
});