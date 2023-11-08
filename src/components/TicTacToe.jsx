import { useRef, useState } from "react";
import Cross from "/Cross.png";
import Circle from "/Circle.png";

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [title, setTitle] = useState("Tic Tac Toe");
  const [data, setData] = useState(Array(9).fill(""));

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (num) => {
    if (lock || data[num] !== "") {
      return;
    }

    const updatedData = [...data];
    if (count % 2 === 0) {
      updatedData[num] = "x";
      setCount(count + 1);
    } else {
      updatedData[num] = "o";
      setCount(count + 1);
    }

    setData(updatedData);
    checkWin(updatedData);
  };

  const checkWin = (updatedData) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (
        updatedData[a] &&
        updatedData[a] === updatedData[b] &&
        updatedData[a] === updatedData[c]
      ) {
        won(updatedData[a]);
        return;
      }
    }

    // if (updatedData.every((square) => square !== "")) {
    //   // Handle draw
    // }
  };

  const won = (winner) => {
    setLock(true);
    let message = winner === "x" ? "Player X wins!" : "Player O wins!";
    setTitle(message);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="board">
        <div className="row1">
          {boxArray.slice(0, 3).map((box, index) => (
            <div
              className="boxes"
              key={index}
              ref={box}
              onClick={() => toggle(index)}
            >
              {data[index] === "x" ? (
                <img src={Cross} alt="Cross" />
              ) : data[index] === "o" ? (
                <img src={Circle} alt="Circle" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="row2">
          {boxArray.slice(3, 6).map((box, index) => (
            <div
              className="boxes"
              key={index + 3}
              ref={box}
              onClick={() => toggle(index + 3)}
            >
              {data[index + 3] === "x" ? (
                <img src={Cross} alt="Cross" />
              ) : data[index + 3] === "o" ? (
                <img src={Circle} alt="Circle" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="row3">
          {boxArray.slice(6).map((box, index) => (
            <div
              className="boxes"
              key={index + 6}
              ref={box}
              onClick={() => toggle(index + 6)}
            >
              {data[index + 6] === "x" ? (
                <img src={Cross} alt="Cross" />
              ) : data[index + 6] === "o" ? (
                <img src={Circle} alt="Circle" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
