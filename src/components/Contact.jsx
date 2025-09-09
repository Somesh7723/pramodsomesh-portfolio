import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "../styles/contact.css"

const Contact = () => {
    const form = useRef();
    const [inputs, setInputs] = useState({
        "mail": "",
        "msg": ""
    });
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        if(inputs.mail!="" && inputs.msg!=""){
            emailjs
            .sendForm('somesh7723', 'template_qspwg8n', form.current, {
                publicKey: 'cx-K_i6lPbWUlxozJ',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                alert("Mail Sent Successfully!");
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        }
        else{
            alert("Please attach your mail and a msg to send me a msg!!");
        }
    };
    return (
        <div id="contactWrapper">
            <div id="contactContainer">
                <div id="contactContent">
                    <div id="contactTitle">CONTACT ME</div>
                    <div id="contactSubTitle">Drop a mail to connect with me!</div>
                </div>
                <div id="contactFormContainer">
                    <form ref={form} onSubmit={sendEmail} id="contactForm">
                        
                            <label htmlFor="name" className="inputLabelContact">Name</label>
                            <input type="text" name="name" id="name" placeholder="Kratos" className="inputContact" />
                        
                        
                            <label htmlFor="mail" className="inputLabelContact">Email</label>
                            <input type="email" name="mail" id="mail" placeholder="kratos@godofwar.com" className="inputContact" onChange={(e) => setFormState({...inputs, mail:e.target.value})} />
                        
                        
                            <label htmlFor="message" className="inputLabelContact">Message</label>
                            <input type="text" name="msg" id="msg" placeholder="Have a great day!!" className="inputContact" onChange={(e) => setFormState({...inputs, msg:e.target.value})} />
                        
                        <button type="submit" value="Send" id="formSubmit">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact