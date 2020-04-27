import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button, TextField } from "@material-ui/core";

const styles = makeStyles({
  contactForm: {
    height: 500,
    display: "flex",
    width: "50%",
    borderTop: "solid 0px transparent",
    borderLeft: "solid 0px transparent",
    borderRight: "solid 0px transparent",
    borderBottom: "solid 0px transparent",
    boxShadow: "0 0 5px #333",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25
  },
  smallTextInputSpacing: {
    paddingRight: 25
  },
  largeTextInput: {
    marginTop: 25,
    width: "100%"
  },
  pageHeader: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap"
  },
  submitButton: {
    backgroundColor: "#FF40FF"
  },
  submitButtonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "right",
    paddingTop: 15
  },
  "@media (max-width: 600px)": {
    contactForm: {
      width: "100%"
    },
    smallTextInputSpacing: {
      paddingRight: 0
    },
    largeTextInput: {
      width: "75%"
    },
    submitButton: {
      marginRight: 40
    }
  }
});

export const ContactForm = () => {
  const classes = styles();
  return (
    <div className={classes.contactForm}>
      <form noValidate autoComplete="off">
        <div className={classes.pageHeader}>
          <h1>Contact Us</h1>
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Name"
            className={classes.smallTextInputSpacing}
          />
          <TextField required id="standard-required" label="Email" />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={10}
            variant="outlined"
            className={classes.largeTextInput}
          />
        </div>
        <div className={classes.submitButtonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
