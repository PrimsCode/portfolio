import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Grid, Typography, Button, Card, CardContent, TextField, Alert } from '@mui/material';
import "../../Portfolio.css"

const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1hf0nrv', 'template_oxkj11n', form.current, 'vuiaT2ZTgQFDTzvF3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setSent(true);
        setTimeout(() => {
            setSent(false)
        }, 10000);
    };

    return (
        <Grid className="section" id="contact-form">
            {sent === true ?
                <Alert onClose={() => { setSent(false) }} severity="success">
                    Your message has been successfully sent!
                </Alert>
                :
                null
            }
            <Grid>
                <Typography variant="h2">Contact Me</Typography>
                <Card>
                    <CardContent>
                        <form ref={form} onSubmit={sendEmail}>
                            <TextField
                                name="name"
                                label="Name"
                                placeholder="Enter your name"
                                variant="outlined" fullWidth required />
                            <TextField
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                variant="outlined" fullWidth required />
                            <TextField
                                name="message"
                                label="Message"
                                placeholder="Enter your message"
                                multiline rows={5} variant="outlined" fullWidth required />

                            <Grid margin={2}>
                                <Button type="submit" variant="contained" color="secondary">Submit</Button>
                            </Grid>

                        </form>
                    </CardContent>
                </Card>

            </Grid>
        </Grid>
    )
}

export default ContactForm;