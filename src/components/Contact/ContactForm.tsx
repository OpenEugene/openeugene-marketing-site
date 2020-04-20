import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TextField } from "@material-ui/core";

const styles = makeStyles({
  contactForm:{
    height: 500,
    display:"flex",
    width:"50%",
    borderTop: "solid 0px transparent",
    borderLeft: "solid 0px transparent",
    borderRight: "solid 0px transparent",
    borderBottom: "solid 0px transparent",
    boxShadow: "0 0 5px #333",
    justifyContent:"center",
    alignItems:"center",
    marginTop:25,
    marginBottom:25
  }
});

export const ContactForm = () => {
  const classes = styles();
  return (
    <div className={classes.contactForm}>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
