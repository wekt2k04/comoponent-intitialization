function Main(props) {
  return <Header msg={props.msg} />;
};

function Header(props) {
  return(
    <div style={{ border: "10px solid lightgray"}}>
      <h1>This is the header</h1>
      <Wrapper msg={props.msg}/>
    </div>
  );
};

function Wrapper(props) {
  return (
    <div style={{ border: "20px solid gray"}}>
      <h2>This is the wrapper</h2>
      <Button msg={props.msg}/>
    </div>
  );
};

function Button(props) {
  return (
    <div style={{border : "10px solid orange"}}>
      <h3>This is the button element</h3>
      <button onClick={() => alert(props.msg)}>Click Me !</button>
    </div>
  );
}

function App(){
  return(
    <Main msg="I passed through the Main, then the Header, the Wrapper and finally the Button element"/>
  );
};

export default App;