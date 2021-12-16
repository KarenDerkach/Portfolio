import React from "react";
import './Contact.css';
import gmail from '../../assets/Contact/gmail_png.png';
import linkedin from '../../assets/Contact/linkedin_png.png';
import github from '../../assets/Contact/github_png.png';


export default function Contact() {
    return (
        <div className="c">
           <div className="c-bg">
              <div className="c-wrapper">
             <div className="c-left">
                 <h1 className="c-title"> Let's discuss your project</h1>
               <div className="c-info">
                   {/*EMAIL */}
                   <div className="c-info-item">
                       <img src={gmail} alt="" className="c-icon"/>
                   </div>
                   {/*REDES LINKEDIN */}
                   <div className="c-info-item">
                       <img src={linkedin} alt="" className="c-icon"/>
                   </div>
                   {/*REDES GITHUB */}
                   <div className="c-info-item">
                       <img src={github} alt="" className="c-icon"/>
                   </div>
                   </div> 
             </div>
             {/*FORM */}
             <div className="c-right">
                    <form className="c-form">
                        <input type='text' placeholder="Name" name="user_name"/>
                        <input type='text' placeholder="Subject" name="user_subject"/>
                        <input type='text' placeholder="Email" name="user_email"/>
                        <textarea rows="5"placeholder="Message" name="user_message"></textarea>
                        <button>Submit</button>
                    
                    </form>
             </div>
             </div> 
          </div> 

        </div>
    )

}