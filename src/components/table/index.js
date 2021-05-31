import { Rect, Stage, Layer, Text } from "react-konva";
import React, { Component } from "react";
import { render } from "react-dom";

const Table = ({ getCoordinates }) => {
  // const arr = createBoard();

  // const createBoard = () => {
  //   let arrFunc = [];
  //   for (let i = 0; i < 8; i++) {
  //     for (let j = 0; j < 8; j++) {
  //       arrFunc[i].push({ width: 50, height: 50 });
  //     }
  //   }
  //   return arrFunc;
  // };

  return (
    <Stage width={500} height={500}>
      <Layer>
        <Rect width={50} height={50} fill="black" />
      </Layer>
    </Stage>
  );
};

export default Table;
