import { useState } from 'react';
import './App.css';
import Button from './Button.js';

export default function App() {

  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState(6);

  function onSizeSelectHandler(size) {
    setSelectedSize(size);
  }

  function onColorSelectHandler(color) {
    setSelectedColor(color);
  }

  function genCol(size) {
    const col = [];

    for (let i = 0; i < size; i++) {
      col.push(
        <Button key={i} color={selectedColor} size={size}/>
      );
    }
    return col;
  }
  

  function genRow(size) {
    const row = [];
    for (let i = 0; i < size; i++) {
      row.push(
        <div key={i} className="board_row">
          {genCol(size)}
        </div>
      );
    }
    return row;
  }

  function resetHandler(){
    onColorSelectHandler("white");
    onSizeSelectHandler(0);
    genRow(0);
  }

  return (
    <div className="app">
      <nav className='color_selection'>
        <button className="selection" style={{ backgroundColor: "red" }} onClick={() => onColorSelectHandler("red")}>Red</button>
        <button className="selection" style={{ backgroundColor: "green" }} onClick={() => onColorSelectHandler("green")}>Green</button>
        <button className="selection" style={{ backgroundColor: "blue" }} onClick={() => onColorSelectHandler("blue")}>Blue</button>
        <button className="selection" style={{ backgroundColor: "yellow" }} onClick={() => onColorSelectHandler("yellow")}>Yellow</button>
        <button className="selection" style={{ backgroundColor: "orange" }} onClick={() => onColorSelectHandler("orange")}>Orange</button>
        <button className="selection" style={{ backgroundColor: "purple" }} onClick={() => onColorSelectHandler("purple")}>Purple</button>
        <button className="selection" style={{ backgroundColor: "white" }} onClick={() => onColorSelectHandler("white")}>White</button>
        <button className="selection" style={{ backgroundColor: "black" }} onClick={() => onColorSelectHandler("black")}>Black</button>
      </nav>
      <div className="board">
        
        {genRow(selectedSize)}

        <div className='size_change'>
          <button className="size_button" onClick={() => onSizeSelectHandler(6)}>6x6</button>
          <button className="size_button" onClick={() => onSizeSelectHandler(12)}>12x12</button>
          <button className="size_button" onClick={() => onSizeSelectHandler(24)}>24x24</button>
          <button className="size_button" onClick={() => resetHandler()}>Reset</button>
        </div>

      </div>
    </div>);
}