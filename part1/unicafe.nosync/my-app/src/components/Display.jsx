import React from "react";

const Display = ({displayText, displayType}) => {
    return (
        <div>
            {displayText} {displayType}
        </div>
    );
};

export default Display;
