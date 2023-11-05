import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import traqez from '../assets/traqez2.png';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LockClockIcon from '@mui/icons-material/LockClock';
import AttractionsIcon from '@mui/icons-material/Attractions';
import FaceIcon from '@mui/icons-material/Face';
import PasswordIcon from '@mui/icons-material/Password';
import LoginIcon from '@mui/icons-material/Login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Webcam from 'react-webcam';
import { useLocation } from "wouter";



const useStyles = makeStyles({
    mainContainer: {
        height: "400px",
        width: "800px",
        margin: 0,
        padding: 0,
        display: "flex",
        background: "white",
    },
    container: {
        height: "100%",
        width: "400px",
        display: "flex",
        flexDirection: "column",
    },
    leftContainer: {
        justifyContent: "space-around",
    },
    rightContainer: {
        padding: "2rem"
    },
    dpContainer: {
        border: "2px solid #b6bab7",
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        backgroundColor: "#3b3c3d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        margin: "auto"
    },
    cover: {
        position: "absolute",
        width: "400px",
        height: "400px",
        backgroundColor: "#3b3c3d",
        zIndex: 1,
    },
    icon: {
        fontSize: "100px",
        color: "#00A7EC",
        zIndex: 2
    },
    imageContainer: {
        zIndex: 2,
    },
    traqezImage: {
        height: "90px",
        width: "220px",
        zIndex: 2,
    },
    headingContainer: {
        zIndex: 2,
    },
    heading: {
        zIndex: 2,
        fontFamily: "system-ui",
        fontWeight: "bold",
        color: "#3b3c3d",
        fontSize: "25px",
        padding: "1rem",
        margin: 0,
        textShadow: "2px 3px 5px",
        textDecoration: "underline",
        clear: "both",
        display: "inline-block"
    },
    topDiv: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    ButtonGroup: {
        display: "flex",
        marginLeft: "9rem"
    },
    buttonActive: {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        border: "2px solid #00A7EC",
        backgroundColor: "#00A7EC",
        textDecoration: "underline"
    },
    normalButton: {
        backgroundColor: "#3b3c3d",
        fontFamily: "system-ui",
        fontSize: "15px",
        fontWeight: "bold",
        color: "white",
        borderRadius: "40px",
    },
    closeBtn: {
        backgroundColor: "white",
        color: "#3b3c3d",
        borderRadius: "50%",
        border: "1px solid #3b3c3d",
        height: "37px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover, &:focus": {
            boxShadow: "black 2px 2px 2px",
            border: "1px solid #787777",
            color: "#787777"
        },
    },
    animatedCover: {
        animation: `$myVisualEffectOne 1500ms`,
        animationFillMode: "forwards"
    },
    animatedCoverSudo: {
        animation: `$myVisualEffectOneSudo 1500ms`,
        animationFillMode: "forwards"
    },
    "@keyframes myVisualEffectOne": {
        "0%": {
            opacity: 1,
            borderRadius: "75% 0% 75% 0%",
        },
        "50%": {
            opacity: 0.7,
            borderRadius: "0% 0% 0% 0%",
        },
        "100%": {
            opacity: 1,
            borderRadius: "0% 75% 0% 75%",
        }
    },
    "@keyframes myVisualEffectOneSudo": {
        "0%": {
            opacity: 1,
            borderRadius: "0% 75% 0% 75%",
        },
        "50%": {
            opacity: 0.7,
            borderRadius: "0% 0% 0% 0%",
        },
        "100%": {
            opacity: 1,
            borderRadius: "75% 0% 75% 0%",
        }
    },
    animateLeftHeading: {
        animation: `$shiftLeftHeading 1500ms`,
        animationFillMode: "forwards"
    },
    animateRightHeading: {
        animation: `$shiftRightHeading 1500ms`,
        animationFillMode: "forwards"
    },
    "@keyframes shiftLeftHeading": {
        "0%": {
            transform: "translateX(160%)"
        },
        "100%": {
            transform: "translateX(0%)"
        },
    },
    "@keyframes shiftRightHeading": {
        "0%": {
            transform: "translateX(0%)"
        },
        "100%": {
            transform: "translateX(160%)",
        },
    },
    animateLeftImage: {
        animation: `$shiftLeftImage 1500ms`,
        animationFillMode: "forwards"
    },
    animateRightImage: {
        animation: `$shiftRightImage 1500ms`,
        animationFillMode: "forwards"
    },
    "@keyframes shiftLeftImage": {
        "0%": {
            transform: "translateX(85%)"
        },
        "100%": {
            transform: "translateX(0%)"
        },
    },
    "@keyframes shiftRightImage": {
        "0%": {
            transform: "translateX(0%)"
        },
        "100%": {
            transform: "translateX(85%)",
        },
    },
    inputDiv: {
        display: "flex",
        backgroundColor: "#e7e7ef",
        margin: "1rem",
        borderRadius: "15px",
        justifyContent: "start",
        alignItems: "center",
        height: "40px",
        marginLeft: "2rem",
        marginRight: "0.5rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
    },
    leftInputDiv: {
        display: "flex",
        backgroundColor: "#e7e7ef",
        borderRadius: "15px",
        justifyContent: "start",
        alignItems: "center",
        height: "40px",
        marginLeft: "2rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        marginRight: "0.3rem"
    },
    rightInputDiv: {
        display: "flex",
        backgroundColor: "#e7e7ef",
        borderRadius: "15px",
        justifyContent: "start",
        alignItems: "center",
        height: "40px",
        marginRight: "0.5rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
    },
    Dflex: {
        display: "flex",
        margin: 0
    },
    inputField: {
        fontFamily: "system-ui",
        backgroundColor: "#e7e7ef",
        border: 0,
        padding: "0.5rem",
        width: "95%",
        "&:focus": {
            outline: "none"
        },
    },
    inputContainer: {
        marginTop: "1rem",
        position: "absolute"
    },
    buttonDiv: {
        marginLeft: "2rem",
        marginRight: "0.5rem",
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    submitButton: {
        background: "#00A7EC",
        border: "1px solid #d0c9c9",
        color: "white",
        fontFamily: "system-ui",
        fontWeight: "bold",
        padding: "0.5rem",
        fontSize: "15px",
        borderRadius: "15px",
        width: "100%",
        marginTop: "10px"
    },
    opacityTrue: {
        animation: `$opacityTrue 1500ms`,
        animationFillMode: "forwards"
    },
    opacityFalse: {
        animation: `$opacityFalse 1500ms`,
        animationFillMode: "forwards"
    },
    "@keyframes opacityTrue": {
        "0%": {
            opacity: 0,
            zIndex: -100
        },
        "100%": {
            opacity: 1,
            zIndex: 100
        },
    },
    "@keyframes opacityFalse": {
        "0%": {
            opacity: 1,
            zIndex: 100
        },
        "100%": {
            opacity: 0,
            zIndex: -100
        },
    },
    modeContainer: {
        margin: "1rem 2rem 0rem 2rem",
        display: "flex",
        width: "330px",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headingMode: {
        fontFamily: "system-ui",
        fontWeight: "bold",
        margin: 0,
        textDecoration: "underline",
    },
    modeButton: {
        border: "1px solid black",
        borderRadius: "50%",
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
        color: "black",
        padding: "5px",
        "&:hover, &:focus": {
            boxShadow: "2px 2px 10px"
        }
    },
    modeActive: {
        backgroundColor: '#00A7EC',
        color: "white"
    },
    mx2rem: {
        margin: "0rem 2rem 0rem 2rem"
    },
    my2rem: {
        margin: "2rem 0rem 2rem 0rem"
    },
    mTop1rem: {
        marginTop: "1rem"
    },
    headingLogin: {
        fontFamily: "system-ui",
        fontWeight: "bold",
        margin: "0.5rem 0 0 0"
    },
    loginEmail: {
        fontWeight: "bold",
        margin: 0,
        fontFamily: "system-ui",
        color: "green"
    },
    textButton: {
        border: 0,
        backgroundColor: "white",
        color: "blue",
        margin: 0
    },
    inputDivLogin: {
        display: "flex",
        backgroundColor: "#e7e7ef",
        borderRadius: "15px",
        justifyContent: "start",
        alignItems: "center",
        height: "40px",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        width: "315px"
    },
    contentContainer: {
        width: "330px"
    },
    otpText: {
        fontFamily: "system-ui",
        fontSize: "14px",
        width: "inherit",
        fontStyle: "italic",
        color: "#00A7EC"
    }
});


const SignUpPage = (props) => {
    const classes = useStyles();
    const [location, setLocation] = useLocation();
    const [currentMode, setCurrentMode] = useState(props.mode);
    const [currentLoginMode, setCurrentLoginMode] = useState("standard");
    const [variablesData, setVariablesData] = useState({ email: "test@test.com" });
    const [recoveredEmail, setRecoveredEmail] = useState(true);
    const videoConstraints = {
        width: 1329,
        height: 800,
        facingMode: "user"
    };
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );


    const handleClose = (e) => {
        e.preventDefault()
        setLocation("/")
        console.log(props.mode)
    }


    return (
        <div className={classes.mainContainer}>
            <div className={`${classes.leftContainer} ${classes.container}`}>
                <div className={`${classes.cover} ${classes.animatedCover}`}></div>
                <div className={classes.headingContainer}>
                    <h2 className={`${classes.heading} ${currentMode === "signup" ? classes.animateRightHeading : classes.animateLeftHeading}`}>
                        {currentLoginMode === "standard" ? "Standard Login" : ""}
                        {currentLoginMode === "otp" ? "Otp Login" : ""}
                        {currentLoginMode === "face" ? "Face Login" : ""}
                    </h2>
                </div>
                <div className={classes.dpContainer}>
                    <PersonIcon className={classes.icon} fontSize="100px" />
                </div>
                <div className={classes.imageContainer}>
                    <img className={`${classes.traqezImage} ${currentMode !== "signup" ? classes.animateRightImage : classes.animateLeftImage}`} src={traqez} alt="none" />
                </div>
            </div>
            <div className={`${classes.rightContainer} ${classes.container}`}>
                <div className={classes.topDiv}>
                    <div className={classes.ButtonGroup}>
                        <button className={`${classes.normalButton} ${currentMode === "signup" ? classes.buttonActive : ""}`}
                            onClick={() => setCurrentMode("signup")}
                        >SignUp</button>
                        <button className={`${classes.normalButton} ${currentMode === "login" ? classes.buttonActive : ""}`}
                            onClick={() => setCurrentMode("login")}
                        >Login</button>
                    </div>
                    <button className={classes.closeBtn} onClick={handleClose}><CloseIcon /></button>
                </div>

                <div>
                    <div className={`${classes.inputContainer} ${currentMode === "signup" ? classes.opacityTrue : classes.opacityFalse}`}>
                        <div className={classes.inputDiv}>
                            <BadgeIcon /> |
                            <input className={classes.inputField} placeholder="Fullname" type="text" />
                        </div>
                        <div className={classes.inputDiv}>
                            <EmailIcon /> |
                            <input className={classes.inputField} placeholder="Email" type="email" />
                        </div>
                        <div className={classes.Dflex}>
                            <div className={classes.leftInputDiv}>
                                <LockIcon /> |
                                <input className={classes.inputField} placeholder="Password" type="password" />
                            </div>
                            <div className={classes.rightInputDiv}>
                                <LockClockIcon /> |
                                <input className={classes.inputField} placeholder="Confirm Password" type="email" />
                            </div>
                        </div>
                        <div className={classes.inputDiv}>
                            <AttractionsIcon />|
                            <input className={classes.inputField} placeholder="Role" type="text" />
                        </div>
                        <div className={classes.buttonDiv}>
                            <button className={classes.submitButton}>SignUp</button>
                        </div>
                    </div>
                    <div className={`${classes.inputContainer} ${currentMode === "login" ? classes.opacityTrue : classes.opacityFalse}`}>
                        <div className={classes.modeContainer}>

                            <div>
                                <button
                                    className={`${classes.modeButton} ${currentLoginMode === "standard" ? classes.modeActive : ""}`}
                                    onClick={() => setCurrentLoginMode("standard")}
                                ><LoginIcon fontSize="small" /></button>
                                &nbsp;
                                <button
                                    className={`${classes.modeButton} ${currentLoginMode === "otp" ? classes.modeActive : ""}`}
                                    onClick={() => setCurrentLoginMode("otp")}
                                ><PasswordIcon fontSize="small" /></button>
                                &nbsp;
                                <button
                                    className={`${classes.modeButton} ${currentLoginMode === "face" ? classes.modeActive : ""}`}
                                    onClick={() => setCurrentLoginMode("face")}
                                ><FaceIcon fontSize="small" /></button>
                            </div>
                        </div>
                        <div className={classes.mx2rem}>
                            <div className={`${classes.inputContainer} ${currentLoginMode === "standard" ? classes.opacityTrue : classes.opacityFalse}`}>
                                <div>
                                    {
                                        recoveredEmail === true ?
                                            <div>
                                                <h3 className={classes.headingLogin}>Logged in As :</h3>
                                                <p className={classes.loginEmail}>{variablesData.email}</p>
                                                <button className={classes.textButton} onClick={() => setRecoveredEmail(false)}>Change User?</button>
                                            </div> :
                                            <div>
                                                <div className={`${classes.inputDivLogin} ${classes.mTop1rem}`}>
                                                    <EmailIcon /> |
                                                    <input className={classes.inputField} placeholder="Username/Email" type="text" />
                                                </div>
                                            </div>
                                    }
                                </div>
                                <div className={`${classes.inputDivLogin} ${classes.my2rem}`}>
                                    <LockIcon /> |
                                    <input className={classes.inputField} placeholder="Password" type="password" />
                                </div>
                                <button className={classes.submitButton}>Login</button>
                            </div>
                            <div className={`${classes.inputContainer} ${classes.contentContainer} ${currentLoginMode === "otp" ? classes.opacityTrue : classes.opacityFalse}`}>
                                <h4 className={classes.otpText}>Please enter the otp shared to you on registered email.</h4>
                                <div className={`${classes.inputDivLogin} ${classes.my2rem}`}>
                                    <VisibilityIcon /> |
                                    <input className={classes.inputField} placeholder="Otp" />
                                </div>
                                <button className={classes.submitButton}>Submit</button>
                            </div>
                            <div className={`${classes.inputContainer} ${currentLoginMode === "face" ? classes.opacityTrue : classes.opacityFalse}`}>
                                <div>
                                    <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        width={330}
                                        videoConstraints={videoConstraints}
                                    />
                                    <button onClick={capture}>Capture photo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUpPage;