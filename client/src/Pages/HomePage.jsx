// @flow

import React from 'react';
import Header from '../Componenst/Header';
export default class HomePage extends React.PureComponent<{}> {
    render () {
        return <React.Fragment>
            <header>
                <Header/>
            </header>
            <main>
                <h1>Home Page</h1>
            </main>
        </React.Fragment>;
    }
}
