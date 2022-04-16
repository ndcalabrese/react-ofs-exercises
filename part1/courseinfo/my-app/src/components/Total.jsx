import React from "react";

const Total = ({content}) => {
    return (
        <>
            <p>
                Number of exercises {content.parts[0].exercises + content.parts[1].exercises + content.parts[2].exercises}
            </p>
        </>
    );
};

export default Total;
