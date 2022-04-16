import StatisticsLine from './StatisticsLine';
import Total from './Total';
import Average from './Average';
import Percentage from './Percentage';

const Statistics = ({counters, totalCount}) => {
    // StatisticsLine message if feedback count is zero.
    if (totalCount === 0) {
        return (
            <div>
                No feedback given.
            </div>
        );
    }
    return (
        <div>
            <StatisticsLine displayText="good" displayCount={counters[0]}/>
            <StatisticsLine displayText="neutral" displayCount={counters[1]}/>
            <StatisticsLine displayText="bad" displayCount={counters[2]}/>
            <Total data={counters}/>
            <Average data={counters} total={totalCount}/>
            <Percentage data={counters}/>
        </div>
    );
};

export default Statistics;
