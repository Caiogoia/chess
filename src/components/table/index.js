import { Rect, Stage, Layer, Text } from "react-konva";
import React, { Component } from "react";
import { render } from "react-dom";

const Table = ({ getCoordinates, handleClick }) => {
  const width = 500
  const height = 500
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
  const createNumbers = () => {
    const arr = []
    for(let x = 0; x<8; x++){
      arr.push({
        label: x + 1,
         x: width
      })
    }
    return arr;
  }
  const arr = createBoard();
  const numbers = createNumbers()
  return (
    <Stage width={500} height={500}>
      <Layer>
        {arr.map((row) => {
        return row.map((square) => {
           return <Rect
              x={square.x}
              y={square.y}
              width={square.width}
              height={square.height}
              fill={square.fill}
              onClick={handleClick}
            />;
          });
        })}
        {numbers.map(number => (
          <Text text={number.label} x={50} y={5}/>
        ))}
      </Layer>
    </Stage>
  );
};

export default Table;
