import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useLocation } from "wouter";
import main from '../assets/main.png';
import main2 from '../assets/main2.png';
const electron = require("electron");

const useStyles = makeStyles({
    buttonBg: {
        height: "75px",
        width: "75px",
        backgroundImage: `url(${main})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        border: 0,
        borderRadius: 10,
        backgroundRepeat: 'no-repeat',
        margin: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 10px;",
        animation: `$offHover 4000ms`,
        animationFillMode: "forwards",
        "&:hover, &:focus": {
            backgroundImage: `url(${main2})`,
            animation: `$onHoverEffect 500ms`,
            animationFillMode: "forwards"
        },
    },
    "@keyframes onHoverEffect": {
        "0%": {
            opacity: 0.4,
            height: "75px",
            width: "75px"
        },
        "50%": {
            opacity: 0.7,
            height: "85px",
            width: "85px",
            margin: "0px"
        },
        "100%": {
            opacity: 1,
            height: "75px",
            width: "75px",
            margin: "5px"
        }
    },
    "@keyframes offHover": {
        "0%": {
            opacity: 1
        },
        "100%": {
            opacity: 0.4
        }
    }
});

const Home = (props) => {
    const classes = useStyles();
    const [location, setLocation] = useLocation();

    React.useEffect(() => {
        var button = document.getElementById("home_button");
        button.addEventListener('click', nofocus);

        function nofocus() {
            this.blur();
        }
    })


    const handleDoubleClick = (e) => {
        e.preventDefault()
        setLocation("/button_page")
        electron.ipcRenderer.send('button_page_rendered', 'render_allow')
    }

    let animationId;
    let mouseX;
    let mouseY;

    const onMouseDown = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        document.addEventListener('mouseup', onMouseUp)
        requestAnimationFrame(moveWindow);
    }

    const onMouseUp = (e) => {
        electron.ipcRenderer.send('windowMoved');
        document.removeEventListener('mouseup', onMouseUp)
        cancelAnimationFrame(animationId)
    }

    const moveWindow = () => {
        electron.ipcRenderer.send('windowMoving', { mouseX, mouseY });
        animationId = requestAnimationFrame(moveWindow);
    }


    return (
        // <div style={{ WebkitAppRegion: "drag", margin: "1rem", width: "80px" }}>
        //     <Button style={{ WebkitAppRegion: "no-drag" }} className={classes.buttonBg} onDoubleClick={handleDoubleClick}></Button>
        // </div>
        <div id="container" onMouseDown={onMouseDown} style={{ margin: 0 }}>
            <button id="home_button" className={classes.buttonBg} onDoubleClick={handleDoubleClick}></button>
        </div>
    )
}

export default Home;