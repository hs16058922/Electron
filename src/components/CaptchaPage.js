import React, { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainContainer: {
        height: "290px",
        width: "300px",
        backgroundColor: "#3b3c3d",
        margin: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "20px",
        fontFamily: "system-ui"
    },
    captchaContainer: {
        padding: "1rem"
    },
    heading: {
        color: "#00A7EC",
        fontFamily: "system-ui",
    },
    captcha: {
        height: "80px",
        width: "200px",
        fontFamily: "system-ui"
    },
    input: {
        background: "white",
        color: "grey",
        borderRadius: "10px",
        padding: ".5rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        width: "245px",
        outline: "none"
    },
    submit: {
        backgroundColor: "#00A7EC",
        borderRadius: "10px",
        color: "white",
        margin: "1rem",
        padding: "0.3rem",
        width: "265px",
        fontFamily: "system-ui",
        fontSize: "25px",
        border: "0px"
    },
    errorText: {
        color: "red",
        fontStyle: "italic",
        fontSize: "12px",
        margin: "1rem"
    }
});


const Captcha = () => {
    const classes = useStyles();
    const [error, setError] = React.useState("");
    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;
        setError(" ");
        if (validateCaptcha(user_captcha) == true) {
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        }

        else {
            setError("*Entered catcha does not match.")
        }
    }

    return (
        <div >
            <div className={classes.mainContainer}>
                <div className="form-group">
                    <div style={{ padding: "1rem" }}>
                        <h2 className={classes.heading} style={{ margin: 0 }}>CAPTCHA :</h2>
                    </div>
                    <div className={classes.captchaContainer}>
                        <LoadCanvasTemplate reloadText="Reload" className={classes.captcha} />
                    </div>
                    <div className="col mt-3">
                        <div style={{ width: "100%" }}>
                            <input
                                placeholder="Enter Captcha Value"
                                id="user_captcha_input"
                                name="user_captcha_input"
                                type="text"
                                className={classes.input}
                            />
                        </div>
                    </div>
                    <div>
                        <b
                            className={classes.errorText}
                        >{error}</b>
                    </div>
                    <div className="col mt-3">
                        <div>
                            <button
                                class="btn btn-primary"
                                onClick={() => doSubmit()}
                                className={classes.submit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Captcha;