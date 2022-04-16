import Display from './Display';
import Total from './Total';
import Average from './Average';
import Percentage from './Percentage';

const Statistics = ({counters, totalCount}) => {
    // Display message if feedback count is zero.
    if (totalCount === 0) {
        return (
            <div>
                No feedback given.
            </div>
        );
    }
    return (
        <div>
            <Display displayText="good" displayType={counters[0]}/>
            <Display displayText="neutral" displayType={counters[1]}/>
            <Display displayText="bad" displayType={counters[2]}/>
            <Total data={counters}/>
            <Average data={counters} total={totalCount}/>
            <Percentage data={counters}/>
        </div>
    );
};

export default Statistics;
