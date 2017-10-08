import React from 'react';
import iFetch from 'src/i/iFetch.js';
import ibem from 'src/i/ibem.js';
import PostItem from 'src/Post/Post.jsx';

import 'src/Posts/List.less';

export default class PostList extends React.Component {
    static defaultProps = {
        bem: new ibem('posts-list')
    }

    state = {}

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        iFetch({
            method: 'GET',
            url: '/api/posts'
        })
        .then(result => {
            this.setState({
                posts: result
            });
        })
        .catch(result => console.log(result));
    }

    renderPost(post) {
        const {bem} = this.props;

        return <PostItem key={post.id} bem={bem} post={post}/>;
    }

    render() {
        const {posts} = this.state,
            {bem} = this.props;

        if (!posts) {
            return <h2>Loading...</h2>
        } else {
            return <div className={bem.cls()}>
                {posts.map(post => this.renderPost(post))}
            </div>
        }
    }
}
