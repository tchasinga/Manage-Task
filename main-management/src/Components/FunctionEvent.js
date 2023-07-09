function FunctionEvent() {
    return (
        <div>
            <h3 className="getColoring">Function Event</h3>
            <button style={{ cursor : "pointer" }} onClick={makeAction}>Aler-me</button>
        </div>
    )
}


const myColor = document.querySelector('.getColoring')
function makeAction() {
    alert("Hello");
    myColor.style.color = "blue";
}

export default FunctionEvent;