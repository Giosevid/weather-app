import React from 'react';
import Header from './index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});