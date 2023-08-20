import React from 'react'
import "./contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
    <a className="mailBtn" href="mailto:gharals0012000@gmail.com">
      <Button>Contact: gharals0012000@gmail.com</Button>
    </a>
  </div>
  )
}

export default Contact;
