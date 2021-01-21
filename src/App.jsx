import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Brownie",
//       animal: "Dog",
//       breed: "German Shepherd",
//     }),
//     React.createElement(Pet, { name: "Leo", animal: "Dog", breed: "Shih Tzu" }),
//     React.createElement(Pet, {
//       name: "Coco",
//       animal: "Dog",
//       breed: "Rottweiler",
//     }),
//   ]);
// };
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
const App = () => {
  console.log("here");
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
