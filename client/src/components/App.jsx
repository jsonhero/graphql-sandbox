import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import TodoContainer from './TodoContainer';

class App extends Component {

    static propTypes = {
        user: PropTypes.object,
    }

    static defaultProps = {
        user: {
            name: 'blah'
        }
    }

    render() {
      console.log('ok')

        return (
          <TodoContainer />
        );
    }
}

export default Relay.createContainer(App, {
    fragments: {
        todos: () => Relay.QL`
            fragment on Todo {
                text,
            }
        `
    }
})
