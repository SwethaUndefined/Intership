import "./SecondContent.css";
import ThirdImage from "../Images/ThirdImage.jpg";

const SecondContent =()=> {
    return (
<div id="parentTwo">
        <div>
        <p id="headingOne"><span style={{color : 'yellow'}}>WE ARE SWEAT EQUITY <br/> INVESTORS AND </span>
        <span style={{color: 'white'}}>
        INSATIABLE <br/> INNOVATORS
        </span>
        </p>
        <p id="paraTwo"><span style={{color:'mediumvioletred'}}>Whether it's</span><span style={{color: 'white'}}> our idea or yours</span>
       <span style={{color: 'mediumvioletred'}}> , we<br/> carefully balance all facets of product <br/>
            development, brand building and <br/>
            fundraising so you have laser focus on <br/>
            growing</span><span style= {{color: 'white'}}> your venture</span><span style={{color: 'mediumvioletred'}}>.</span></p>
        </div>
        <div id="imageOne">
        <img src={ThirdImage} alt="image Not Found"/>
        </div>
        </div>   
         )
}

export default SecondContent;