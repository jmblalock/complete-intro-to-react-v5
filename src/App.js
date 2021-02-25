import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Remy",
      animal: "Dog",
      breed: "Greate Pyrenees",
    }),
    React.createElement(Pet, {
      name: "Quincy",
      animal: "Dog",
      breed: "Terrier",
    }),
    React.createElement(Pet, { name: "Emmer", animal: "Dog", breed: "Lab" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
