import Bowl from "./Bowl";
function Puppy(props) {
    return(<div>{props.name} has a <Bowl bowlShape="square" bowlStatus="full" /></div>);
}

export default Puppy;