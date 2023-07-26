import Icons from "../icons/Icons";
import './Card.css';
function Cards({ gameEnd , player , onPlay , index}) {
  let icon = <Icons />;
  if (player =="X") {
    icon = <Icons name="cross" />;
  } else if (player == "O") {
    icon = <Icons name="circle" />;
  }
  return <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index) }>{icon}</div>;
}
export default Cards;
