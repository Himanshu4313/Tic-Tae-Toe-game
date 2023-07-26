import { useState } from "react";
import Cards from "../components/cards/Card";
import "./Grid.css";
import IsWinner from "../helpers/Iswinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true => 0 or false => x
  const [winner, setWinner] = useState(null);
  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = IsWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }

function  reset(){
     setTurn(true);
     setWinner(null);
     setBoard(Array(numberOfCards).fill(""));
  }
  return (
    <div className="grid-wrapper">
        {
            winner &&(
                <>
                  <h1>Winner is {winner}</h1>
                  <button onClick={reset}>Reset game</button>

                </>
            )
        }
      <h1 className="turn-heighlight">Current Turn:= {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((ele, idx) => (
          <Cards key={idx} gameEnd={winner ? true : false} onPlay={play} player={ele} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
