import React from "react";

const Total = ({counters}) => {
    return (
        <div>
            all {counters[0] + counters[1] + counters[2]}
        </div>
    );
};

export default Total;
