import React from 'react';

export default class Post extends React.Component {
    render() {
        const {bem, post} = this.props;

        return <div className={bem.elem('item').cls()}>
            {post.text}
        </div>;
    }
}
