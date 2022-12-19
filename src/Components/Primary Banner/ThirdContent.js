import "./ThirdContent.css";
import FourthImage from "../Images/FourthImage.jpg";

const ThirdContent =()=> {
    return (
        <div id="parent3">
    <h1 id="headingTwo"><span style={{color : 'white'}}>TRADITION </span> <br/>
       <span style={{color :"turquoise"}}>IS DEAD</span></h1>
    <p id="paraFour" style={{color : 'yellow'}}>Newsflash: the start-up landscape has changed ferociously <br/>
    and anyone who thinks otherwise is wrong. 
    </p>  
    <p  id="paraFive">
        The days of over inflated valuations and taking decades to
        <br/> realise value are long gone. 
        </p> 
    <p id="paraSix">Today's successful ventures don't need massive development
        <br/> teams & huge marketing budgets to thrive. That's why we build
         <br/>ventures that break tradition and transform industries. All
         <br/> without having belt-buckling budgets.
    </p>
    <img src={FourthImage} alt="Image not found" style={{backgroundColor : 'white'}}
        id="imgFour"/>
</div>
        )
    }
    
    export default ThirdContent;