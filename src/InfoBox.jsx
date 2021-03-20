import React from 'react';
import './InfoBox.css'
import Anime from 'react-anime'



const toFormalNumber = (num) => {
    let formattedNumber = '';
    let index1 = '';
    console.log(typeof num)

    if (typeof (num) === "number") {
        let stringNum = typeof num === Number ? '' : num.toString();
        index1 = stringNum[0]
        for (let n = 0; n < stringNum.length; n++) {
            if (n % 4 === 0) {
                formattedNumber += ','
            } else {
                formattedNumber += stringNum[n]
            }
        }
    } else {
        return num
    }
    console.log(formattedNumber)
    let toformalnumber = `${index1} ${formattedNumber}`
    return toformalnumber;
}

const InfoBoxes = ({ title, cases, total, bgColor, animeDelay }) => {
    const caseDataStyle = { fontWeight: 900, color: bgColor };

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
                        <div className="InfoBox__caseDataStyle">
                            <h4 className="InfoBox__cases">
                                <div className="InfoBox__dateHolder">Today</div>
                                <div style={caseDataStyle}>{toFormalNumber(cases)}</div>
                            </h4>
                            {/* total */}
                            <h4 className="InfoBox__cases">
                                <div className="InfoBox__dateHolder">Total</div>
                                <div style={caseDataStyle}>{toFormalNumber(total)}</div>
                            </h4>
                        </div>
                    </div>
                </div>
            </Anime>
        </div>
    );
}

export default InfoBoxes;
