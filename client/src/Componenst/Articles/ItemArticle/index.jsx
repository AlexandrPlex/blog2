// @flow

import React from 'react';
import './itemArticleStyle.scss'
type Props = {
    article: any;
}

type State = {

}
export default class ItemArticle extends React.PureComponent<Props, State> {
    render () {
        return<a className="itemArticle" href="#">
                <figure className="article-image is-16by9">
                    <img
                        src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-02.png"
                        alt=""/>
                </figure>
                <div className="article-body">
                    <h2 className="article-title">
                        Hello World
                    </h2>
                    <p className="article-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                        pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                        facilisis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                        pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                        facilisis.
                    </p>
                    <footer className="article-info">
                        <span>By Joe Smith</span>
                        <span>42 comments</span>
                    </footer>
                </div>
            </a>;
    }
}
