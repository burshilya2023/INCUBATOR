const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>;
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List tasks={["task 1", "task 2", "task 3"]} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  