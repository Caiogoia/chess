import { Rect, Stage, Layer, Text } from "react-konva";
import React, { Component } from "react";
import { render } from "react-dom";

const Table = ({ getCoordinates, handleClick }) => {
  const width = 500;
  const height = 500;
  const l = ["a", "b", "c", "d", "e", "f", "g", "h"];
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
    const arr = [];
    for (let x = 0; x < 8; x++) {
      arr.push({
        label: x + 1,
        x: 390,
        y: x * 50 + 5,
        fill: (x + 1) % 2 === 0 ? "#B58863" : "#F0D9B5",
      });
    }
    return arr;
  };
  const createLetters = () => {
    const arr = [];
    for (let x = 0; x < 8; x++) {
      arr.push({
        label: l[x],
        x: x * 50 + 5,
        y: 385,
        fill: (x + 1) % 2 === 0 ? "#B58863" : "#F0D9B5",
      });
    }
    return arr;
  };
  const arr = createBoard();
  const numbers = createNumbers();
  const letters = createLetters();
  return (
    <Stage width={500} height={500}>
      <Layer>
        {arr.map((row, letter) => {
          return row.map((square, number) => {
            return (
              <Rect
                x={square.x}
                y={square.y}
                width={square.width}
                height={square.height}
                fill={square.fill}
                onClick={() => handleClick(l[letter], number + 1)}
              />
            );
          });
        })}
        {numbers.map((number, index) => (
          <Text
            text={number.label}
            x={number.x}
            y={number.y}
            fill={number.fill}
          />
        ))}
        {letters.map((letter, index) => (
          <Text
            text={letter.label}
            x={letter.x}
            y={letter.y}
            fill={letter.fill}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Table;
