import "../component.css";
import PayButton from "./playbutton";

function Aside(props) {

  return <aside className="aside-content">
    <div>
      <h4>{props.game_name}</h4>
      <p style={{ backgroundcolo: "lightorange" }}>₹{props.Price} </p>
        <PayButton   {...props} />
    </div>
  </aside>
}

export {
  Aside
}