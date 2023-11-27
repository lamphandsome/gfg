import { useState } from "react";
import React from "react";
import './xo.css'

function Square ({value, onSquareClick}) { 
    return(
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
 }

 function Broad({xIsNext, squares,onPlay}) {
    function handleClick (i){
        if (calculateWinner (squares)|| squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i]= '✗';
        } else {
            nextSquares[i]='❍'
        }
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner){
        status = 'Winner : ' + winner;
    } else{
        status = 'Winner : ' + (xIsNext ? '✗' : '❍');
    }
    return(
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[6]} onSquareClick={() => handleClick(5)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[9]} onSquareClick={() => handleClick(8)}/>

        </div>
        <div className="board-row">
            <Square value={squares[10]} onSquareClick={() => handleClick(10)}/>
            <Square value={squares[11]} onSquareClick={() => handleClick(11)}/>
            <Square value={squares[12]} onSquareClick={() => handleClick(12)}/>
            <Square value={squares[13]} onSquareClick={() => handleClick(13)}/>
            <Square value={squares[14]} onSquareClick={() => handleClick(14)}/>
            <Square value={squares[15]} onSquareClick={() => handleClick(15)}/>
        </div>
        <div className="board-row">
            <Square value={squares[16]} onSquareClick={() => handleClick(16)}/>
            <Square value={squares[17]} onSquareClick={() => handleClick(17)}/>
            <Square value={squares[18]} onSquareClick={() => handleClick(18)}/>
            <Square value={squares[19]} onSquareClick={() => handleClick(19)}/>
            <Square value={squares[20]} onSquareClick={() => handleClick(20)}/>
            <Square value={squares[21]} onSquareClick={() => handleClick(21)}/>
        </div>
        </>
    )
 }
 export default function Game(){
    const [xIsNext,setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(20).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currenSquare = history[currentMove];

    function handlePlay (nextSquares){
        const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove (nextHistory.length-1);
        setXIsNext(!xIsNext);
    }
    function jumpTo(nextMove){
        setCurrentMove (nextMove);
        setXIsNext (nextMove % 2===0);
    }
    const moves = history.map((squares, move) => {
        let description;
        if(move>0){
            description = 'Go to move #' + move;
        } else { 
            description = 'Go to start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return (
        <div className="game">
            <div className="game-board">
                <Broad xIsNext= {xIsNext} squares={currenSquare} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
 }
 function calculateWinner (squares) { 
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (let i = 0; i<lines.length;i++){
        const [a,b,c]= lines[i];
        if (squares[a] && squares[a] === squares[b]&& squares[a]=== squares[c]){
            return squares[a];
        }
    }
    return null;
  }