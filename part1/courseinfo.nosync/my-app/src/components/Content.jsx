import React from "react";
import Part from "./Part";

const Content = ({content}) => {
    return (
        <>
            <Part part={content.parts[0]} />
            <Part part={content.parts[1]}/>
            <Part part={content.parts[2]}/>
        </>
    );
};

export default Content;
