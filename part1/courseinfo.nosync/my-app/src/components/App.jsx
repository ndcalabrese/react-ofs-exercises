import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
    const course = "Half Stack application development";
    const courseProps = { 
      part1: "Fundamentals of React",
      part2: "Using props to pass data",
      part3: "States of a component"
    }
    const exerciseProps = {
      exercises1: 10,
      exercises2: 7,
      exercises3: 14
    }
    const courseAndExerciseProps = {...courseProps, ...exerciseProps};
    
    return (
        <>
            <Header course={course} />
            <Content {...courseAndExerciseProps} />
            <Total {...exerciseProps} />
        </>
    );
};

export default App;
