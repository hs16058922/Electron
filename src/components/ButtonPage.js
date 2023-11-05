import React from 'react';
import face_ai from '../assets/face_ai.png';
import close_image from '../assets/close.png';
import { useLocation } from "wouter";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const electron = require("electron");


const useStyles = makeStyles({
    imageBg: {
        width: "75px",
        height: "90px",
        borderRadius: 10,
        padding: "10px",
        "&:hover, &:focus": {
            animation: `$myEffect 700ms`,
            width: "85px",
            height: "100px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
    },
    "@keyframes myEffect": {
        "0%": {
            width: "70px",
            height: "90px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 0px",
        },
        "50%": {
            width: "90px",
            height: "105px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        "100%": {
            width: "85px",
            height: "100px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }
    },
});


const ButtonPage = () => {
    const classes = useStyles();
    const [current_mode, setCurrentMode] = React.useState("signup");
    const [location, setLocation] = useLocation();

    const handleClose = (e) => {
        e.preventDefault()
        setLocation("/")
        electron.ipcRenderer.send('home_page_rendered')
    }

    const handleShutDown = (e) => {
        console.log("Shutdown happned")
    }

    const handleFaceAi = (e) => {
        e.preventDefault();
        setLocation('./face_ai');
        electron.ipcRenderer.send('face_ai_rendered');
    }

    const handlePrivMgmnt = (e) => {
        e.preventDefault();
        setLocation('./priv_mgmnt');
        electron.ipcRenderer.send('priv_mgmnt_rendered');
    }

    const handleBreak = (e) => {
        e.preventDefault();
        setLocation("/break");
        electron.ipcRenderer.send('break_page_rendered');
    }

    return (
        <Card sx={{ width: 300, height: 300, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <button
                        onClick={handleFaceAi}
                        style={{
                            border: 0,
                            backgroundColor: "white",
                            borderRadius: 10,
                            marginRight: "30px"
                        }}
                    >
                        <img src={face_ai} className={classes.imageBg} alt="none" />
                    </button>

                    <button
                        style={{
                            border: 0,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                        onClick={handlePrivMgmnt}
                    >
                        <p style={{ color: "#00A7EC", fontSize: "1rem" }} className={classes.imageBg}> Privilege mgmnt</p>
                    </button>

                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <button
                        style={{
                            border: 0,
                            backgroundColor: "white",
                            borderRadius: 10,
                            marginRight: "30px"
                        }}
                        onClick={handleClose}
                    >
                        <p style={{ color: "#00A7EC", fontSize: "1rem", margin: "auto" }} className={classes.imageBg}>Compliance</p>
                    </button>
                    <button
                        style={{
                            border: 0,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                        onClick={handleShutDown}
                    >
                        <img src={close_image} alt="none" className={classes.imageBg} />
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ButtonPage;