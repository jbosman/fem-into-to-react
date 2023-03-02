function Pet({ name, animal, bread }) {
  return (
    React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, bread)
      ]
    )
  );
}

function App() {
  return (
    React.createElement(
      "div", 
      {},
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, ({ name: "Luna", animal: "Dog", bread: "Havanese" })),
        React.createElement(Pet, ({ name: "Pepper", animal: "Bird", bread: "Cockatiel" })),
        React.createElement(Pet, ({ name: "Doink", animal: "Cat", bread: "Mixed" })),
      ]
    )
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); 