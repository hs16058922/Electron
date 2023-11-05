import React from 'react';
import warning_image from '../assets/warning.png';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    myButton: {
        width: "100%",
        backgroundColor: "00A7EC",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px"
    },
});


const ResumePage = (props) => {
    const classes = useStyles();

    var message = "You can't end this break till 12:41 PM.Enjoy the rest!"

    const handleClose = (e) => {
        // e.preventDefault()
        // setLocation("/")
        // electron.ipcRenderer.send('home_page_rendered')
    }

    const handleShutDown = (e) => {
        console.log("Shutdown happned");
    }

    return (
        <Card sx={{ width: 300, height: 350, borderRadius: 5 }}>
            <div>
                <div style={{ width: 300, background: "#00A7EC", height: "100px", padding: 0 }}>
                    <div style={{ display: "block", background: "#00A7EC", textAlign: "end", paddingTop: "10px" }}>
                        <Button variant="text" style={{ color: "white" }} onClick={{ handleClose }}><CloseIcon /></Button>
                    </div>
                    <div style={{ display: "block", background: "#00A7EC", textAlign: "center" }}>
                        <img src={warning_image} style={{ width: "70px", height: "70px", marginBottom: "40px" }} />
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "70px" }}>
                    <h3 style={{ color: "#777777", fontFamily: "cursive" }}>Too Early</h3>
                    <p style={{ color: "#777777", fontFamily: "roboto", width: "200px", margin: "auto" }}>{message}</p>
                    <Button size="small" variant="outlined" style={{ marginTop: "30px" }}>Ok</Button>
                </div>
            </div>
        </Card>
    )
}

export default ResumePage;