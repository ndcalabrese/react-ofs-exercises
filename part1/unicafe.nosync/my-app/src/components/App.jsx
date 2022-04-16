import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Statistics from './Statistics';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allCounters = [good, neutral, bad];
  
  
  const goodFeedback = () => setGood(good + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);
  const badFeedback = () => setBad(bad + 1);

  return (
    <div>
      <Header headerText="give feedback"/>
      <Button feedbackType={goodFeedback} buttonText='good'/>
      <Button feedbackType={neutralFeedback} buttonText='neutral'/>
      <Button feedbackType={badFeedback} buttonText='bad'/>
      <Header headerText="statistics"/>
      <Statistics counters={allCounters}/>
    </div>
  );
};

export default App