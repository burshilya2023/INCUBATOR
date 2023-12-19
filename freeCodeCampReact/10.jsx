class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Nest NonCitrus component within Fruits component */ }
          <NonCitrus />
          { /* Nest Citrus component within Fruits component */ }
          <Citrus />
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Nest Fruits component within TypesOfFood component */ }
          <Fruits />
          { /* Render Vegetables component after Fruits component */ }
          <Vegetables />
        </div>
      );
    }
  };
  