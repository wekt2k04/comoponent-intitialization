function Card(props) {
    return(
    <div className="Card">
        <h1>This is the value of the card : {props.num}</h1>
        <p>The card's value is {props.num >= 50 ? "Higher" : "Lower"} than 50</p>
    </div>
    );
}

export default Card;