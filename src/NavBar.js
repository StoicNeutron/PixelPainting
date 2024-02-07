import './App.css'

export default function NavBar(){
    return (
        <div>
            <nav className="color_selection">
                <button className="selection" style={{backgroundColor: "red"}}>Red</button>
                <button className="selection" style={{backgroundColor: "green"}}>Green</button>
                <button className="selection" style={{backgroundColor: "blue"}}>Blue</button>
                <button className="selection" style={{backgroundColor: "yellow"}}>Yellow</button>
                <button className="selection" style={{backgroundColor: "orange"}}>Orange</button>
                <button className="selection" style={{backgroundColor: "purple"}}>Purple</button>
                <button className="selection" style={{backgroundColor: "white"}}>White</button>
                <button className="selection" style={{backgroundColor: "black"}}>Black</button>
            </nav>
        </div>
    );
}