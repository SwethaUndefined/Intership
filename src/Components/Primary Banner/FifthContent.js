import SixthImage from "../Images/SixthImage.jpg";
import "./FifthContent.css" ;
const FifthContent = ()=>{
    return(
        <div id="parent5">
        <img src={SixthImage} alt="Image not found" id="imgSix"/>
        <h1 id="headingFour"><span style={{color:'darkgoldenrod'}}>AIMLESSLY <br/>
            CHASING UNICORNS</span> <br/>
           <span style={{color:'peru'}}>ISN'T OUR BAG</span>
            </h1>
           <p id="paraEight">We believe in building ventures that are commercially viable,<br/> 
            operationally sound and truly category re-defining. Therefore, <br/>
            we don’t believe in chasing vanity metrics & over-inflated<br/>
             valuations. When our ventures reach unicorn status, it's <br/>
             because of the laser-focused strategy and bulletproof <br/>
             commercials. 
        </p> 
    </div>
    )
}
export default FifthContent;