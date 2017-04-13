import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';

import App from './components/App';

injectTapEventPlugin();


Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:4000/graphql')
);

class TodoRoute extends Relay.Route {
    static routeName = 'todoRoute';

    static queries = {
      todos: () => Relay.QL`
        query { getTodos }
      `
    }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Relay.RootContainer
        Component={App}
        route={new TodoRoute()}
        />
  </MuiThemeProvider>,
    document.getElementById('root')
);
