// !20%
class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
      // Binding methods to the component instance
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  
    handleChange(event) {
      // Update input with what the user is typing
      this.setState({
        input: event.target.value
      });
    }
  
    submitMessage() {
      // Concatenate the current message to the messages array and clear the input
      const newMessage = this.state.input;
      this.setState({
        input: '',
        messages: [...this.state.messages, newMessage]
      });
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {this.state.messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  }
  