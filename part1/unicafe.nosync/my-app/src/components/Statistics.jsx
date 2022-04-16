import Display from './Display';
import Total from './Total';
import Average from './Average';
import Percentage from './Percentage';

const Statistics = ({counters}) => {
    const totalCount = counters[0] + counters[1] + counters[2]
    return (
        <div>
            <Display displayText="good" displayType={counters[0]}/>
            <Display displayText="neutral" displayType={counters[1]}/>
            <Display displayText="bad" displayType={counters[2]}/>
            <Total data={counters}/>
            <Average data={counters} totalCount={totalCount}/>
            <Percentage data={counters}/>
        </div>
    );
};

export default Statistics;
