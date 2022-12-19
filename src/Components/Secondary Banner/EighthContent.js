import seventhImage from "../Images/seventhImage.jpg";
import ThirdImage from "../Images/ThirdImage.jpg";
import eighthImage from "../Images/eighthImage.jpg";
import ninthImage from "../Images/ninthImage.jpg";
import SecondImage from "../Images/SecondImage.jpg";
import "./EighthContent.css";

const EighthContent = ()=>{
    return(
        <div id="maindiv3">
      <h1 style={{color: 'white'}} id="headingSeven">WE ARE...</h1>
      <div id="parent8">
        <div>
          <img src={seventhImage} alt="Image not found" className="imgSeven"/>
          <p style={{color: 'salmon'}} className="paraEleven">
            TECHNICAL <br />
            & GROWTH <br />
            EXPERTS
          </p>
        </div>
        <div>
          <img src={ThirdImage} alt="Image not found" className="imgSeven"/>
          <p style={{color: 'mediumvioletred'}} className="paraEleven">
            CALCULATED <br />
            RISK <br />
            TAKERS
          </p>
        </div>
        <div>
          <img src={eighthImage} alt="Image not found" className="imgSeven" />
          <p style={{color: 'mediumblue'}} className="paraEleven">
            PASSIONATE <br />
            CHANGE <br />
            MAKERS
          </p>
        </div>
        <div>
          <img src={ninthImage} alt="Image not found" className="imgSeven" />
          <p style={{color: 'mediumblue'}} className="paraEleven">
            RESILIANT & <br />
            DRIVEN <br />
            VISIONARIES
          </p>
        </div>
        <div>
          <img src={SecondImage} alt="Image not found" className="imgSeven"/>
          <p style={{color: 'mediumvioletred'}} className="paraEleven">
            HUMBLE & <br />
            CONSIDERATE <br />
            CONSULTANTS
          </p>
        </div>
      </div>
    </div>
    )
}
export default EighthContent;