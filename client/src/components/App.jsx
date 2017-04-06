import React, { Compoment, PropTypes } from 'react';
import Relay from 'react-relay';

class App extends Component {
    
    static propTypes = {
        user: PropTypes.object,
    }

    render() {

        const { user } = this.props;

        return (
            <div>
                <div>
                    {'Name:'}
                </div>
                <div>
                    {user.name}
                </div>
            </div>
        )
    }
}

export default Relay.createContainer(App, {
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                name,
            }
        `
    }
})