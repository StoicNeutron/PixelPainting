import { useState } from 'react';
import './App.css';
import Button from './Button.js';

export default function App() {

  const [selectedColor, setSelectedColor] = useState("white");

  function onColorSelectHandler(color) {
    setSelectedColor(color);
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
        <div className="board_row">
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
        </div>
        <div className="board_row">
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
        </div>
        <div className="board_row">
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
        </div>
        <div className="board_row">
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
        </div>
        <div className="board_row">
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
        </div>
        <div className="board_row">
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
          <Button color={selectedColor} />
        </div>
      </div>
    </div>);
}