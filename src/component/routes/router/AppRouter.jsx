import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import StartScreen from "../../screens/StartScreen";

function AppRouter() {
    console.log("In app router");
    return (
        <div>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="start" element={<Home />} />
            </Routes>
        </div>
    );
}

export default AppRouter;
