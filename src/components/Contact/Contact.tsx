import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Let's Work Together </p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:jk3097316@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:jk3097316@gmail.com">Hello@jitendrakumar.com</a>
        </div>
        <div>
          <a href="tel:+919153097316"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919153097316">(+91) 9153097316</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}