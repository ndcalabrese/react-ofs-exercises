import React from "react";

const Percentage = ({counters}) => {
    const totalCount = counters[0] + counters[1] + counters[2];
    return (
        <div>
            positive {counters[0] / totalCount * 100} %
        </div>
    );
};

export default Percentage;
