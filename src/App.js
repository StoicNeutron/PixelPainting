import './App.css'
import Button from './Button.js'
import NavBar from './NavBar';

export default function App() {
  let color = "white";
  return (
    <div className="app">
      <NavBar />
      <div className="board">
        <div className="board_row">
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
        </div>
        <div className="board_row">
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
        </div>
        <div className="board_row">
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
        </div>
        <div className="board_row">
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
        </div>
        <div className="board_row">
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
        </div>
        <div className="board_row">
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
          <Button color={color} />
        </div>
      </div>
    </div>);
}