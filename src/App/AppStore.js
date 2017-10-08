import MicroEvent from 'microevent';
import AppActions from 'src/App/AppActions.js';

var AppStore = new MicroEvent();

//add logs
AppActions.iDispatcher.register(console.log);

// add Dispatcher
AppActions.iDispatcher.register(payload => {
    switch (payload.eventName) {
        case 'registerUser':
            AppStore.userInfo = payload.userInfo;
            AppStore.trigger('registerUser');
        break;
    }

    return true;
});

export default AppStore;
