import React from "react";
import Part from "./Part";

const Content = (props) => {
    const partNum = {
        p1: {
            name: props.part1,
            exercises: props.exercises1
        },
        p2: {
            name: props.part2,
            exercises: props.exercises2
        },
        p3: {
            name: props.part3,
            exercises: props.exercises3
        }
    }
    return (
        <>
            <Part {...partNum.p1} />
            <Part {...partNum.p2}/>
            <Part {...partNum.p3}/>
        </>
    );
};

export default Content;
