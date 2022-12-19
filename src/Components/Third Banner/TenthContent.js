import lion from "../Images/lion.jpg";
import "./TenthContent.css";
const TenthContent = ()=>{
    return(
        <div id="parentdiv5">
        <div>
    <h3 style={{color: 'blue',fontSize:44}}>OUR COMPETENCIES</h3>
    <h4>IDEATION & VALIDATION</h4>
    <h4 style={{color: 'turquoise'}}>TECHNICAL
        DEVELOPMENT, UI & UX</h4>
        <h4 style={{color: 'blue'}}>BRANDING &  PROPOSITION DEV</h4>
        <h4 style={{color:'coral'}}>FUNDRAISING & 
            INVESTOR RELATIONS </h4>
        <h4 style={{color: 'mediumvioletred'}}>ADMIN & OPERATIONS</h4>
        <h4 style={{color: 'yellow'}}>GROWTH & BUSINESS DEV
        </h4>
        </div>
        <img src={lion} alt="" id="lionimg"/>
    </div>
    )
}

export default TenthContent;