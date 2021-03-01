import React from 'react';
import {
    Card, CardContent, Typography
} from '@material-ui/core'

const InfoBoxes = ({ title, cases, total }) => {
    return (
        <Card className="InfoBox">
            <CardContent>
                {/* title */}
                <Typography className="InfoBox__title" color="textSecondary">
                    {title}
                </Typography>
                {/* number of cases */}
                <h2 className="InfoBox__cases">{cases}</h2>
                {/* total */}
                <Typography className="InfoBox__total" color="textSecondary">
                    {total}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBoxes;
