import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../index';

it('Header Snaphot', () => {
    const tree = renderer
        .create(<Header/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
