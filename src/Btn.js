// function Btn() {
//   const clickHandler = 
//     () => console.log('clicked')
//   return (
//     <button onClick={clickHandler}>Click me</button>
//   );
// }

// export default Btn;

function Btn() {
  const clickHandler = 
    () => alert('Mouse Over')
  return (
    <button onMouseOver={clickHandler}>Click me</button>
  );
}

export default Btn;