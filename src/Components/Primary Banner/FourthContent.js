import FifthImage from "../Images/FifthImage.jpg";
import "./FourthContent.css";
const FourthContent = ()=>{
    return(
        <div id="parent4">
    <img src={FifthImage} alt="Not found" id="imgFive"/>
    <h1 id="headingThree">PRODUCT & <br/>
        PERFORMANCE  <br/>
      <span style={{color: 'yellow'}}>GO HAND IN HAND</span>
        </h1>
        <p id="paraSeven">Aifer has been built on the premise that, in order to<br/>
             succeed, you need a strong product and equally<br/>
              strong growth strategy. We are uniquely placed to<br/>
               focus on both in equal measure to ensure our<br/>
                ventures have a strong foundation to scale and<br/>
                 crucially, reach revenue quickly.
        </p>
</div>
    )
}
export default FourthContent;