import {Routes,Route } from "react-router-dom";

import How from "./Pages/How";
import Who from "./Pages/Who";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

const Routers = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path = "/who" element={<Who/>}/>
            <Route path="/how" element={<How/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}
export default Routers;