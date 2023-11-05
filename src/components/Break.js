import React from 'react';
import face_ai from '../assets/face_ai.png';
import break_image from '../assets/Break_image.png';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "wouter";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
const electron = require("electron");


const useStyles = makeStyles({
    myButton: {
        width: "100%",
        backgroundColor: "00A7EC",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px"
    },
});


const BreakPage = (props) => {
    const classes = useStyles();
    const [current_mode, setCurrentMode] = React.useState("signup");
    const [location, setLocation] = useLocation();

    var message = "You are designing for 2 hours now\n it's time to brew a tea and relax \n Take a break."

    const handleClose = (e) => {
        // e.preventDefault()
        // setLocation("/")
        // electron.ipcRenderer.send('home_page_rendered')
    }

    const handleShutDown = (e) => {
        console.log("Shutdown happned")
    }

    return (
        <Card sx={{ width: 300, height: 350, borderRadius: 5 }}>
            <div>
                <div style={{ width: 300, background: "#00A7EC", height: "100px", padding: 0 }}>
                    <div style={{ display: "block", background: "#00A7EC", textAlign: "end", paddingTop: "10px" }}>
                        <Button variant="text" style={{ color: "white" }} onClick={{ handleClose }}><CloseIcon /></Button>
                    </div>
                    <div style={{ display: "block", background: "#00A7EC", textAlign: "center" }}>
                        <img src={break_image} style={{ width: "70px", height: "70px", marginBottom: "40px" }} />
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "70px" }}>
                    <h3 style={{ color: "#777777", fontFamily: "cursive" }}>TEA TIME</h3>
                    <p style={{ color: "#777777", fontFamily: "roboto", width: "200px", margin: "auto" }}>{message}</p>
                    <Button size="small" variant="outlined" style={{ marginTop: "30px" }}>Have a Tea</Button>
                </div>
            </div>
        </Card>
    )
}

export default BreakPage;