import React from 'react';

import ibem from 'src/i/ibem.js';
import AppActions from 'src/App/AppActions.js';

import 'src/UserInfoForm/UserInfoForm.less';

class UserInfoForm extends React.Component {
    static defaultProps = {
        bem: new ibem('user-info')
    }

    constructor(props) {
        super(props);

        const {userInfo} = props;

        this.state = {};

        if (userInfo) {
            ['family', 'name', 'email'].forEach(
                key => this.state[key] = userInfo[key]
            );
        }
    }

    // state = {
    //     family: this.props.userInfo && this.props.userInfo.family
    // }

    changeState = e => {
        const {name, value} = e.nativeEvent.target;

        this.setState({
            [name]: value
        });
    }

    register = e => {
        e.preventDefault();

        const {family, email, name} = this.state;

        if (!family || !email || !name) {
            this.setState({
                error: 'All fields are required!'
            });
        } else {
            AppActions.registerUser({family, email, name});
            // const {registerHandler} = this.props;
            //
            // if (registerHandler) {
            //     registerHandler({family, email, name});
            // }
        }
    }

    render() {
        const {mod} = this.props;

        return mod === 'view' ? this.renderUserInfo() : this.renderEditForm();
    }

    renderUserInfo() {
        const {bem} = this.props;

        return (
            <form className={bem.cls()} onSubmit={this.register}>
                {['name', 'family', 'email'].map(key =>
                    <label
                        key={key}
                        className={bem.elem('row').cls()}>
                        <span className={bem.elem('row-name').cls()}>{key}</span>
                        <span className={bem.elem('row-value').cls()}>
                            {this.state[key]}
                        </span>
                    </label>
                )}
            </form>);
    }

    renderEditForm() {
        const {bem} = this.props,
            {error} = this.state;

        return (
            <form className={bem.cls()} onSubmit={this.register}>
                {error &&
                    <div className={bem.elem('error').cls()}>
                        {error}
                    </div>}
                {['name', 'family', 'email'].map(key =>
                    <label
                        key={key}
                        className={bem.elem('row').cls()}>
                        <span className={bem.elem('row-name').cls()}>{key}</span>
                        <input
                            className={bem.elem('row-value').cls()}
                            type='text'
                            name={key}
                            value={this.state[key]}
                            onChange={this.changeState}
                            placeholder='put here your family'/>
                    </label>)}
                <div className={bem.elem('controls').cls()}>
                    <input type='submit' value='Register'/>
                </div>
            </form>);
    }
}

export default UserInfoForm;
