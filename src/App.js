import { useState } from 'react';
import './App.css';
import Button from './Button.js';

export default function App() {

  const [selectedColor, setSelectedColor] = useState("white");

  function onColorSelectHandler(color) {
    setSelectedColor(color);
  }

  // function genCol(size) {
  //   const col = [];
  //   for (let i = 0; i < size; i++) {
  //     if (size === 6) {
  //       col.push(<Button key={i} style={{ width: '80px', height: '80px' }} color={selectedColor}/>);
  //     } else if (size === 12) {
  //       col.push(<Button key={i} style={{ width: '40px', height: '40px' }} color={selectedColor}/>);
  //     } else if (size === 24) {
  //       col.push(<Button key={i} style={{ width: '20px', height: '20px' }} color={selectedColor}/>);
  //     }
  //   }
  //   return col;
  // }

  function genCol(size) {
    const col = [];
    const buttonStyle = {
      width: '20px',
      height: '20px'
    };
    if (size === 6) {
      buttonStyle.height = '80px';
      buttonStyle.width = '80px';
    } else if (size === 12) {
      buttonStyle.height = '40px';
      buttonStyle.width = '40px';
    }
    for (let i = 0; i < size; i++) {
      col.push(
        <Button key={i} style={buttonStyle} color={selectedColor}/>
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
        
        {genRow(6)}

        <div className='size_change'>
          <button className="size_button" onClick={() => onColorSelectHandler("red")}>6x6</button>
          <button className="size_button" onClick={() => onColorSelectHandler("green")}>12x12</button>
          <button className="size_button" onClick={() => onColorSelectHandler("blue")}>24x24</button>
        </div>

      </div>
    </div>);
}