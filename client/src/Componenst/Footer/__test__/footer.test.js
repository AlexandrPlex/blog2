import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../index';

it('Footer Snaphot', () => {
    const tree = renderer
        .create(<Footer/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
