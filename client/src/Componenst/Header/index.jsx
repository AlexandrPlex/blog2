// @flow

import React from 'react';
import './headerStyle.scss';

export default class Header extends React.PureComponent<{}> {
    render () {
        return <div className='headerStyle'>
            <h1 className='logo'>Aplex for creating</h1>
        </div>;
    }
}
