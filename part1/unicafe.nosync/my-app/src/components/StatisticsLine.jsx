import React from "react";

const StatisticsLine = ({displayText, displayCount}) => {
    return (
        <div>
            {displayText} {displayCount}
        </div>
    );
};

export default StatisticsLine;
