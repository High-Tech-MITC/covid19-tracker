import React from 'react';
import './InfoBox.css'
import Anime from 'react-anime'

const caseData = { backgroundColor: "black", color: 'white' };


const toFormalNumber = (num) => {
    let formattedNumber = '';
    // let stringNum = num.toString();
    console.log(typeof num)
    let stringNum = typeof num === Number ? '' : num.toString();

    for (let n = 0; n < stringNum.length; n++) {
        if (n % 4 === 0) {
            formattedNumber += ','
        } else {
            formattedNumber += stringNum[n]
        }
    }
    console.log(formattedNumber)
    return `${stringNum[0]} ${formattedNumber}`;
}

const InfoBoxes = ({ title, cases, total, bgColor, animeDelay }) => {

    return (
        <div className="Info">
            <Anime delay={animeDelay} rotate={0} duration={1000} scale={1.1}>
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
                                <div style={caseData}>{toFormalNumber(cases)}</div>
                            </h4>
                            {/* total */}
                            <h4 className="InfoBox__cases">
                                <div className="InfoBox__dateHolder">Total</div>
                                <div style={caseData}>{total}</div>
                            </h4>
                        </div>
                    </div>
                </div>
            </Anime>
        </div>
    );
}

export default InfoBoxes;
