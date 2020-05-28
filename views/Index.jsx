const React = require("react");

const Index = (props) => {
  return (
    <div>
      <h1>To-Do List</h1>
      {props.todos.length > 0 ? (
        <ul>
          {props.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      ) : (
        <h3>There are no to-dos yet!</h3>
      )}
    </div>
  );
};

module.exports = Index;
