import { Rect, Stage, Layer, Text } from "react-konva";
import React, { Component } from "react";
import { render } from "react-dom";

const Table = ({ getCoordinates, handleClick }) => {
  const createBoard = () => {
    let arrFunc = [];
    for (let i = 0; i < 8; i++) {
      let arrFuncI = [];
      for (let j = 0; j < 8; j++) {
        arrFuncI.push({
          width: 50,
          height: 50,
          x: 50 * i,
          y: 50 * j,
          fill: (i + j) % 2 ? "#B58863" : "#F0D9B5",
        });
      }
      arrFunc.push(arrFuncI);
    }
    return arrFunc;
  };

  const arr = createBoard();
  return (
    <Stage width={500} height={500}>
      <Layer>
        {arr.map((row) => {
          row.map((square) => {
            <Rect
              x={square.x}
              y={square.y}
              width={square.width}
              height={square.height}
              fill={square.fill}
              onClick={handleClick}
            />;
          });
        })}
      </Layer>
    </Stage>
  );
};

export default Table;
