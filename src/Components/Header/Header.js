import "./Header.css";
import { Link } from "react-router-dom";
const Header=()=> {
    return (
      <div id="parent" >
        <Link to="/"><h1>aifer</h1></Link>
        <ul id="main">
            <Link to="/who">Who</Link>
            <Link to="/how">How</Link>
            <Link to="/contact">Contact</Link>
        </ul>
      </div>
    )
}

export default Header;