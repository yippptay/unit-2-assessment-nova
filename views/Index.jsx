const React = require("react");

const Index = (props) => {
  return (
    <html>
      <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <div>
          <h1>To-Do List</h1>
          {props.todos.length > 0 ? (
            <ul>
              {props.todos.map((obj, index) => {
                return (
                  <li key={index}>
                    <span>{obj.todo + " - Not Done"}&nbsp;&nbsp;</span>
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
      </head>
    </html>
  );
};

module.exports = Index;
