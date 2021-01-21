import React from "react";
import Pet from "./Pet";

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
      <h1>Adopt Me!</h1>
      <Pet name:"Luna" animal:"dog" breed:"Havanese" />
      <Pet name:"Pepper" animal:"bird" breed:"Cockatiel" />
      <Pet name:"Doink" animal:"cat" breed:"Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
