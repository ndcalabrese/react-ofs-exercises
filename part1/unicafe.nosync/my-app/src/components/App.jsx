import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Display from './Display';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
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
      <Display displayText="good" displayType={good}/>
      <Display displayText="neutral" displayType={neutral}/>
      <Display displayText="bad" displayType={bad}/>
    </div>
  );
};

export default App