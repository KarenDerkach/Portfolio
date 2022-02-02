import React, { useRef, useState} from "react";
import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser';
import './Contact.css';
import gmail from '../../assets/Contact/gmail_png.png';
import linkedin from '../../assets/Contact/linkedin_png.png';
import github from '../../assets/Contact/github_png.png';
import whatsapp from '../../assets/Contact/whatsapp.png'
import contact from '../../assets/Contact/contact.png'
import swal from 'sweetalert'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function Contact() {
    const form = useRef();

    const language = useSelector((state) => state.language);

    const [ setDone] = React.useState(false);

    const [input, setInput] = useState({
        user_name: '',
        user_subject: '',
        user_email: '',
        user_message: ''
    })

    const handleInputChange = (e) => {  //modifico mi estado input agregando lo q me pasan por input del form
        e.preventDefault()
       setInput((input)=>{
              return {
             ...input,
             [e.target.name]: e.target.value
           }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( 
            input.user_name && 
            input.user_email && 
            input.user_message
        ){
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text);
                  setDone(true);
            }, (error) => {
                console.log(error.text);
            }
            )
            language === 'EN' ? swal('Message sent!', 'I will get back to you as soon as possible', 'success') : swal('Mensaje enviado!', 'Te responderé lo antes posible', 'success');
        }
            else{
                language === 'EN' ? swal('Please fill in all the fields', '', 'error') : swal('Por favor llena todos los campos', '', 'error');
            }
    }
  
    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title"> {language === 'EN' ? "Let's get in touch!" : "Pongamonos en contacto!"}</h1>
                    </div>
                        <div className="c-right">
                        <div className="c-info">
                            {/*EMAIL */}
                            <div className="c-info-item">
                                <img src={gmail} alt="" className="c-icon" />
                            </div>
                            {/*REDES LINKEDIN */}
                            <div className="c-info-item">
                                <a href="https://www.linkedin.com/in/karen-derkach/">
                                    <img src={linkedin} alt="" className="c-icon" />
                                </a>
                            </div>
                            {/*REDES GITHUB */}
                            <div className="c-info-item">
                                <a href="https://github.com/KarenDerkach">
                                    <img src={github} alt="" className="c-icon" />
                                </a>
                            </div>
                            {/*REDES WHATSAPP */}
                            <div className="c-info-item">
                                <a href="https://wa.me/5493764653483?text=Hola!,%20eh%20visto%20tu%20portfolio...">
                                    <img src={whatsapp} alt="" className="c-iconWhat" />
                                </a>
                            </div>
                        </div>
                    {/*FORM */}
                  
                        <div className="containerForm">
                        <form ref={form} onSubmit={handleSubmit} className="c-form">
                            <input type='text' placeholder={language === 'EN'? "Name": "Nombre"} name="user_name" value={input.user_name} onChange={(e)=>handleInputChange(e)}/>
                            <input type='text' placeholder={language === 'EN'? "Subject": "Intro"} name="user_subject"value={input.user_subject} onChange={(e)=>handleInputChange(e)} />
                            <input type='text' placeholder={language === 'EN'? "Email": "Correo"} name="user_email"value={input.user_email} onChange={(e)=>handleInputChange(e)}/>
                            <textarea rows="5" placeholder={language === 'EN'? "Message": "Mensaje"} name="user_message"value={input.user_message} onChange={(e)=>handleInputChange(e)}/>
                            <button className="buttonSend">{language === 'EN'? "Submit": "Enviar"}</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        <img src={contact} alt="imagen background" className="imgbkg"/>
        </div>
    )

}