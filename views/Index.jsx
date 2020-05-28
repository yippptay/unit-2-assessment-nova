const React = require("react");

const Index = (props) => {
  return (
    <div>
      <h1>To-Do List</h1>
      {props.todos.length > 0 ? (
        <ul>
          {props.todos.map((obj, index) => {
            return (
              <li key={index}>
                <span>{obj.todo + " - Not Done"}</span>
                <form
                  action={`/todos/${index}?_method=DELETE`}
                  method="POST"
                  style={{ display: "inline" }}
                >
                  <button>DELETE</button>
                </form>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>There are no to-dos yet!</h3>
      )}
      <hr />
      <form action="/todos/new" method="POST">
        <input type="text" name="todo" />
        <button>Add to-do</button>
      </form>
    </div>
  );
};

module.exports = Index;
