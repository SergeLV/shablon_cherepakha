import React from 'react';
import UserInfoForm from 'src/UserInfoForm/UserInfoForm.jsx';
import AppStore from 'src/App/AppStore.js';

class HomePage extends React.Component {

    state = {
        mod: 'edit',
        userInfo: {
            name: 'Andrey',
            family: 'Petrov',
            email: 'andrey.petrov@gmail.com'
        }
    }

    componentWillMount() {
        AppStore.bind('registerUser', this.register);
    }

    componentWillUnmount() {
        AppStore.unbind('registerUser', this.register);
    }

    register = () => {
        const {userInfo} = AppStore;

        console.log('register');
        this.setState({
            userInfo,
            mod: 'view'
        });
    }

    render() {
        const {mod, userInfo} = this.state;

        return <UserInfoForm
                    userInfo={userInfo}
                    mod={mod}/>;
    }
}

export default HomePage;
