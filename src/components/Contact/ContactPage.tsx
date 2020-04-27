import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactForm from "./ContactForm";

const styles = makeStyles({
    contactFormBackground:{
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
});

export const ContactPage = () => {
  const classes = styles();
  return (
    <div className={classes.contactFormBackground}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
