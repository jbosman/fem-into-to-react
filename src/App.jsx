import React from 'react';
import { createRoot } from 'react-dom';

import Pet from './Pet';

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
const root = createRoot(container);
root.render(React.createElement(App)); 