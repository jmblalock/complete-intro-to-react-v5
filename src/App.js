import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Remy",
  //     animal: "Dog",
  //     breed: "Greate Pyrenees",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Quincy",
  //     animal: "Dog",
  //     breed: "Terrier",
  //   }),
  //   React.createElement(Pet, { name: "Emmer", animal: "Dog", breed: "Lab" }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Remy" animal="Dog" breed="Great Pyrenees" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Stray" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
