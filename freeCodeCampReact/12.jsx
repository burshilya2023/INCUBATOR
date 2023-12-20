// Define the MyComponent class
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    // Render method that returns JSX
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  }
  
  // Render MyComponent to the DOM
  ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
  