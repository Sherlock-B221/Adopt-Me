const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, animal),
    React.createElement("h1", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Brownie",
      animal: "Dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, { name: "Leo", animal: "Dog", breed: "Shih Tzu" }),
    React.createElement(Pet, {
      name: "Coco",
      animal: "Dog",
      breed: "Rottweiler",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
