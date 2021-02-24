const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Remy", animal: "Dog", breed: "Greate Pyrenees"}),
    React.createElement(Pet, { name: "Quincy", animal: "Dog", breed: "Terrier"}),
    React.createElement(Pet, { name: "Emmer", animal: "Dog", breed: "Lab"})
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
