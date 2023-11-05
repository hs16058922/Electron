import React from 'react';
import { Route } from "wouter";
import Home from '../components/Home.js';
import ButtonPage from '../components/ButtonPage.js';
import PrivilegeManagement from '../components/PrivilegeManagement.js';
import FaceAi from '../components/FaceAi.js';
import CaptchaPage from '../components/CaptchaPage';
import BreakPage from '../components/Break';
import ResumePage from '../components/Resume';


const App = () => {
    return (
        <div>
            {/* <Route path="/"><TaskManager /></Route> */}
            {/* <Route path="/"><ChatBot /></Route> */}
            {/* <Route path="/"><Home /></Route> */}
            {/* <Route path="/"><CaptchaPage /></Route> */}
            <Route path="/"><BreakPage /></Route>
            {/* <Route path="/"><ResumePage /></Route> */}
            {/* <Route path="/"><ButtonPage /></Route>
            <Route path="/priv_mgmnt"><PrivilegeManagement /></Route>
            <Route path="/face_ai"><FaceAi /></Route> */}
            {/* <Route path="/"><FaceAi /></Route> */}

        </div>
    );
}

export default App;
