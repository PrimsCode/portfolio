import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TOTAL_SCREENS } from '../utilities/commonUtilities';
import Header from "./Home/Header"

const PortfolioContainer = () => {
    const [primaData, setPrimaData] = useState("")
    const resumeUrl = "https://drive.google.com/file/d/1bD4_cV7Yzf4uvgcf-bGwn3jIKlavIGu2/view?usp=sharing";

    useEffect(() => {
        const gitApiUrl = "https://api.github.com/users/primscode";
        const getData = async () => {
            try {
                const response = await axios.get(gitApiUrl);
                setPrimaData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        getData()
    }, []);

    const mapAllScreens = () => {
        return (
            TOTAL_SCREENS.map((screen) => (
                (screen.component) ?
                    <screen.component
                        screenName={screen.screen_name}
                        key={screen.screen_name}
                        id={screen.screen_name}
                        data={primaData}
                        resume={resumeUrl} />
                    :
                    <div key={screen.screen_name}></div>
            ))
        )
    }

    return (
        <>
            <Header primaData={primaData} />
            {mapAllScreens()}
        </>
    )
}

export default PortfolioContainer;