import "./Contact.css"
import thirteenImgae from "../Images/thirteenImgae.jpg";

const ContactUs = ()=>{
    return(
        <div>
         <div id="maindiv6">
         <img src={thirteenImgae} id="img13"/>
         <div id="bottomdiv">
         <img id="bubbleimg" src="https://tse3.mm.bing.net/th?id=OIP.J2Sz3J_9L1lmti7LiJjdwgHaG3&pid=Api&P=0"/>
         <p id="para15">CONTACT</p>
         <form >
            <label style={{fontSize:20}}>Name:</label>
            <input type='text' />
            <br/> <br/>
            <label style={{fontSize:20}}>Email:</label>
            <input type='email' />
            <br/> <br/>
            <label style={{fontSize:20}}>Message:</label>
            <br/> <br/>
            <textarea></textarea>
            <button id="sendBtn">Send</button>
         </form>
         </div>
         </div>
        </div>
    )
}

export default ContactUs;