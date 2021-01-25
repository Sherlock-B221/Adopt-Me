import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
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
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      ;
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
      ;
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
