import { Rect, Stage, Layer, Text, Image } from "react-konva";
import React from "react";
import whitePawn from '../../images/white-pawn.svg'
import Pieces from '../Pieces'
import useImage from 'use-image'

const Table = ({ getCoordinates, handleClick }) => {
  const width = 500;
  const height = 500;
  console.log(whitePawn)
  const [image] = useImage(whitePawn)
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
        label: 8 - x,
        x: 390,
        y: x * 50 + 5,
        fill: (8 - x) % 2 === 1 ? "#B58863" : "#F0D9B5",
      });
    }
    return arr;
  };
  const createPawns = () => {
    let arr = []
    for(let x = 0;x<16;x++){
      arr.push({
        x: 50* x,
        y: 50,
      })
    }
    return arr
  }

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
  const pawns = createPawns()
  return (
    <Stage width={400} height={400}>
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
                onClick={() => handleClick(l[letter], 8 - number)}
              />
            );
          });
        })}
        {numbers.map((number, index) => (
          <Text
            fontStyle="bold"
            text={number.label}
            x={number.x}
            y={number.y}
            fill={number.fill}
          />
        ))}
        {letters.map((letter, index) => (
          <Text
            fontStyle="bold"
            text={letter.label}
            x={letter.x}
            y={letter.y}
            fill={letter.fill}
          />
        ))}
        {pawns.map(pw => (
          <Pieces image={image} x={pw.x} y={pw.y}/>
        ))}
      </Layer>
    </Stage>
  );
};

export default Table;
