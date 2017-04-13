import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Relay from 'react-relay';
import './style.scss';

class TodoMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL` mutation { createTodo }`
  }

  getVariables() {
    return {
      text: this.props.text,
    }
  }

  static fragments = {
    todo: () => Relay.QL`
      fragment on Todo {
        text,
      }
    `,
  }
}

class TodoInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleCreate = () => {
      this.props.relay.commitUpdate(
        new TodoMutation(this.state.text)
      );
  }

  render() {
    console.log(this.props, 'props')
    return (
      <div className='input'>
        <TextField
          hintText={'Todo text...'}
          onChange={(e, val) => this.setState({ text: val }) }
          />
        <RaisedButton
          label='Add'
          primary
          onClick={this.handleCreate}
          />
      </div>
    );
  }
}

export default Relay.createContainer(TodoInput, {
  fragments: {
    createTodo: () => Relay.QL`
      fragment on Todo {
        ${TodoMutation.getFragment('todo')}
      }
    `
  }
})
