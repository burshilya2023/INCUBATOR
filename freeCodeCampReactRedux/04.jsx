// !40%
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    const { input } = this.state;
    this.setState((state) => ({
      input: '',
      messages: [...state.messages, input]
    }));
    // Dispatch the addMessage action
    this.props.addMessage(input);
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Connect DisplayMessages component to Redux
const mapStateToProps = (state) => ({
  messages: state
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message))
});

const ConnectedDisplayMessages = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayMessages);

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <ConnectedDisplayMessages />
      </Provider>
    );
  }
  // Change code above this line
}

// Render the AppWrapper component
const app = (
  <AppWrapper />
);

// Use ReactDOM to render the app in the root element of your HTML file
ReactDOM.render(app, document.getElementById('root'));

