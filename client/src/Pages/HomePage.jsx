// @flow

import React from 'react';
import Header from '../Componenst/Header/index';
import Footer from '../Componenst/Footer/index';
import GridArticles from '../Componenst/Articles/GridArticles'
export default class HomePage extends React.PureComponent<{}> {
    render () {
        return <React.Fragment>
            <header>
                <Header/>
            </header>
            <main>
                <h1>Home Page</h1>
                <GridArticles articles={[1,2,3,4,5,6,7,8]} />
            </main>
            <footer>
                <Footer/>
            </footer>
        </React.Fragment>;
    }
}
