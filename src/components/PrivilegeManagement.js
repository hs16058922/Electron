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
import faceRecog from "../assets/facerecog.png";
import FaceIcon from '@mui/icons-material/Face';
import PasswordIcon from '@mui/icons-material/Password';
import LoginIcon from '@mui/icons-material/Login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Webcam from 'react-webcam';
import { useLocation } from "wouter";
import QRCode from "react-qr-code";


const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "400px",
        display: "flex",
        flexDirection: "column",
    },
    rightContainer: {
        padding: "1rem",
        width: "50%"
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
        width: "265px"
    },
    mainContainer: {
        height: "350px",
        width: "700px",
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
        backgroundColor: "#3b3c3d",
        height: "350px",
        width: "50%"
    },
    traqezImage: {
        height: "90px",
        width: "220px",
        zIndex: 2,
        margin: "auto"
    },
    topDiv: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    animateWithSize: {
        animation: `$animateSize 1500ms`,
        animationFillMode: "forwards"
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
    heading: {
        zIndex: 2,
        fontFamily: "system-ui",
        fontWeight: "bold",
        color: "#3b3c3d",
        fontSize: "15px",
        padding: "1rem",
        margin: 0,
        textShadow: "2px 3px 5px",
        textDecoration: "underline",
        clear: "both",
        display: "inline-block"
    },
    headingTwo: {
        fontFamily: "system-ui",
        fontWeight: "bold",
        color: "white",
        fontSize: "20px",
        padding: "1rem",
        margin: 0,
        clear: "both",
        display: "inline-block",
        justifyContent: "flex-end"
    },
    headingThree: {
        fontFamily: "system-ui",
        fontWeight: "bold",
        color: "#00A7EC",
        fontSize: "20px",
        padding: "1rem",
        margin: 0,
        clear: "both",
        display: "inline-block",
        justifyContent: "flex-end"
    },
    "@keyframes animateSize": {
        "0%": {
            transform: "scale(1)"
        },
        "50%": {
            transform: "scale(1.5)"
        },
        "100%": {
            transform: "scale(1)"
        },
    },
    animateOpacity: {
        animation: `$animateOpacity 2000ms`,
        animationFillMode: "forwards"
    },
    "@keyframes animateOpacity": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        },
    },
    circle: {
        height: "210px",
        width: "210px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        margin: "auto"
    },
    animateCircle: {
        animation: `$animateCircle 2000ms`,
        animationFillMode: "forwards"
    },
    "@keyframes animateCircle": {
        "0%": {
            transform: "scale(0)"
        },
        "25%": {
            transform: "scale(1.4)"
        },
        "50%": {
            transform: "scale(1)"
        },
        "75%": {
            transform: "scale(1.2)"
        },
        "100%": {
            transform: "scale(1)"
        },
    },
    modeContainer: {
        margin: "0rem 2rem 0rem 2rem",
        display: "flex",
        width: "275px",
        justifyContent: "space-between",
        alignItems: "center",
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
    submitButton: {
        background: "#00A7EC",
        border: "1px solid #d0c9c9",
        color: "white",
        fontFamily: "system-ui",
        fontWeight: "bold",
        padding: "0.5rem",
        fontSize: "15px",
        borderRadius: "15px",
        width: "275px",
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
    contentContainer: {
        width: "330px",
        margin: 0
    },
    otpText: {
        fontFamily: "system-ui",
        fontSize: "14px",
        width: "inherit",
        fontStyle: "italic",
        color: "#00A7EC",
        margin: 0,
        wordBreak: "break-all",
        width: "275px"
    },
    myButton: {
        width: "100%",
        backgroundColor: "00A7EC",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px"
    },
    scene: {
        display: "flex",
        perspective: "200px"
    },
    xAxis: {
        animation: "$yAxisAnimation 1s ease-in-out 0s infinite alternate",
    },
    "@keyframes yAxisAnimation": {
        "0%": {
            transform: "rotateY(20deg)"
        },
        "100%": {
            transform: "rotateY(-20deg)"
        }
    }
});


const PrivilegeManagement = (props) => {
    const classes = useStyles();
    const [location, setLocation] = useLocation();
    const [currentLoginMode, setCurrentLoginMode] = useState("Qr code");

    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
        setTimeout(function () {
            setCapturing(false);
        }.bind(this), 5000);

    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
            console.log(recordedChunks);
        },
        [setRecordedChunks]
    );

    // const handleStopCaptureClick = React.useCallback(() => {
    //     mediaRecorderRef.current.stop();
    //     setCapturing(false);
    //     console.log(recordedChunks);
    // }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleClose = (e) => {
        e.preventDefault()
        setLocation("/")
        console.log(props.mode)
    }

    return (
        <div className={classes.mainContainer}>
            <div className={`${classes.leftContainer} ${classes.container}`}>
                <div className={`${classes.animateOpacity} ${classes.headingThree}`}>Trying to login?</div>
                <div className={`${classes.circle} ${classes.animateCircle}`}>
                    <img className={`${classes.traqezImage} ${classes.animateWithSize}`} src={traqez} alt="none" />
                </div>
                <div style={{ width: "90%", display: "flex", justifyContent: "flex-end" }} className={`${classes.animateOpacity} ${classes.headingTwo}`}>Login As Admin</div>
            </div>
            <div className={`${classes.rightContainer} ${classes.container}`}>
                <div className={classes.topDiv}>
                    <div className={classes.heading}>
                        Two Factor authentication
                    </div>
                    <button style={{ margin: "auto", marginLeft: "75px" }} className={classes.closeBtn} onClick={handleClose}><CloseIcon /></button>
                </div>
                <div className={classes.opacityTrue}>
                    <div className={classes.modeContainer}>
                        <h3 className={classes.heading} style={{ paddingLeft: 0 }}>{currentLoginMode}</h3>
                        <div>
                            <button
                                className={`${classes.modeButton} ${currentLoginMode === "Qr code" ? classes.modeActive : ""}`}
                                onClick={() => setCurrentLoginMode("Qr code")}
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
                        <div className={`${classes.inputContainer} ${currentLoginMode === "Qr code" ? classes.opacityTrue : classes.opacityFalse}`}>
                            <div style={{ height: "175px", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                                <QRCode
                                    size={512}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value="check"
                                    viewBox={`0 0 512 512`}
                                    level="M"
                                />
                            </div>
                            <h4 className={classes.otpText}>Please scan the code to proceed further....</h4>
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
                            <div style={{ width: "88%" }}>
                                <div className={classes.scene}>
                                    <img className={capturing && classes.xAxis} src={faceRecog} style={{ height: "109px", width: "90px", marginLeft: "92px", marginTop: "30px", position: "absolute", zIndex: 2 }} />
                                </div>
                                <Webcam height={150} width={275} audio={false} ref={webcamRef} />
                                {capturing ? (
                                    <h4 style={{ width: "275px", testAlign: "center" }} className={classes.otpText}>Please keep moving your face in all directions.</h4>
                                ) : (
                                    <button className={classes.submitButton} onClick={handleStartCaptureClick}>Start Capture</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivilegeManagement;