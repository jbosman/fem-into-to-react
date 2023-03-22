import React from "react";
import { createRoot } from "react-dom/client";

//import Pet from './Pet';

import SearchParams from "./SearchParams";

// App with JSX
function App() {
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
