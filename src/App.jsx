import React from 'react';
import { createRoot } from 'react-dom/client';

//import Pet from './Pet';

import SearchParams from './SearchParams';

// Original App component without JSX
// function App() {
//   return (
//     React.createElement(
//       "div", 
//       {},
//       [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, ({ name: "Luna", animal: "Dog", bread: "Havanese" })),
//         React.createElement(Pet, ({ name: "Pepper", animal: "Bird", bread: "Cockatiel" })),
//         React.createElement(Pet, ({ name: "Doink", animal: "Cat", bread: "Mixed" })),
//       ]
//     )
//   );
// }

// App with JSX
function App(){
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna"   animal="Dog"  bread="Havanese" />
      <Pet name="Pepper" animal="Bird" bread="Cockatiel" />
      <Pet name="Doink"  animal="Cat"  bread="Mixed" /> */}
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App)); 