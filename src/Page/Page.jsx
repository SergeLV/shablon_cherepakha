import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import ibem from 'src/i/ibem.js';

import 'src/Page/Page.less';

/**
 * Page
 */
class Page extends React.Component {
    static defaultProps = {
        bem: new ibem('page')
    }

    render () {
        const {bem, location} = this.props;

        return (
            <div className={bem.cls()}>
                <div className={bem.elem('header').cls()}>
                    <img
                        className={bem.elem('header-img').cls()}
                        src='/img/logo-tv-logo.png'
                        alt=''/>
                    <div className={bem.elem('menu').cls()}>
                        <Link
                            to='/'
                            className={bem
                                .elem('menu-item')
                                .mods(location.pathname === '/' && 'active')
                                .cls()}>
                            Home
                        </Link>
                        <Link
                            to='/posts'
                            className={bem
                                .elem('menu-item')
                                .mods(location.pathname === '/posts' && 'active')
                                .cls()}>
                            Posts
                        </Link>
                    </div>
                </div>
                <h1>Hello world!</h1>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Page);
