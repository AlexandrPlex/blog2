// @flow

import React from 'react';
import ItemArticle from '../ItemArticle';
import './gridArticlesStyle.scss'

type Props = {
    articles: [];
}

type State = {

}

export default class GridArticles extends React.PureComponent<Props, State> {
    render () {
        return <div className='gridArticles'>
            {
                this.props.articles.map(el => {
                    return <React.Fragment><ItemArticle article={el}/></React.Fragment>;
                })
            }
        </div>;
    }
}
