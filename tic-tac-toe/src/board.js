import Square from './square'
import './app.css'
import React from 'react'

function Board(props) {
  
const handleClick=props.onClick;
const values=props.history

  return (
    <div>
      <div className="board-row">
        <Square
          value={values[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={values[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={values[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={values[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={values[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={values[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={values[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={values[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={values[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
};
export default Board;
