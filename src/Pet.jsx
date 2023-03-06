// First iteration without using JSX
// function Pet({ name, animal, bread }) {
//   return (
//     React.createElement(
//       "div",
//       {},
//       [
//         React.createElement("h1", {}, name),
//         React.createElement("h2", {}, animal),
//         React.createElement("h2", {}, bread)
//       ]
//     )
//   );
// }

// JSX version
function Pet(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.bread}</h2>
    </div>
  );
}

export default Pet;