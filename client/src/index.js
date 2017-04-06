import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import App from './components/App';

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:4100/graphql')
);

class UserRoute extends Relay.Route {
    static routeName = 'userRoute';
}

ReactDOM.render(
    <Relay.RootContainer
        Component={App}
        route={new UserRoute()}
        />,
    document.getElementById('root')
);