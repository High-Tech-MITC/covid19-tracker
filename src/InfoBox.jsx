import React from 'react';
import {
    Card, CardContent, Typography
} from '@material-ui/core'
import './InfoBox.css'
import Anime, { anime } from 'react-anime'

const InfoBoxes = ({ title, cases, total, bgColor, animeDelay }) => {
    return (
        <div className="Info">
            <Anime delay={animeDelay} rotate={-5} duration={1000} scale={1.1}>
                <div className="InfoBox">
                    <div style={{ backgroundColor: bgColor }} className="InfoBox__CardContent">
                        <h4 className="InfoBox__title">
                            {title}
                        </h4>
                    </div>
                    <div className="info__data">
                        {/* title */}

                        {/* number of cases */}
                        <div className="InfoBox__caseData">
                            <h4 className="InfoBox__cases">
                                <div className="InfoBox__dateHolder">Today</div>
                                <div>{cases}</div>
                            </h4>
                            {/* total */}
                            <h4 className="InfoBox__cases">
                                <div className="InfoBox__dateHolder">Total</div>
                                <div>{total}</div>
                            </h4>
                        </div>
                    </div>
                </div>
            </Anime>
        </div>
    );
}

export default InfoBoxes;
