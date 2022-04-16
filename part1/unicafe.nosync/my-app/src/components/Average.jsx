import React from "react";

const Average = ({counters}) => {
    const posNegCount = counters[0] + (counters[2] * -1);
    const totalCount = counters[0] + counters[1] + counters[2];
    return (
        <div>
            average {posNegCount / totalCount}
        </div>
    );
};

export default Average;
