import React from "react";

const App = () => {
  const name = "john";
  const x = 10;
  const y = 20;
  const names = ["Brad", "Mary", "Joe", "Sara"];
  const loggedIn = false;
  const styles = {
    color: "red",
    fontSize: "55px",
  };

  return (
    <div>
      <div className="text-5xl">App</div>
      <p>hello {name}</p>
      <p>
        {x} + {y} = {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* {loggedIn ? <h1>Hello member</h1> : ""} */}
      {loggedIn && <h1>Hello member</h1>}
    </div>
  );
};

export default App;
