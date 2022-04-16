import Total from './Total';
import Average from './Average';
import Percentage from './Percentage';

const Statistics = ({counters}) => {
    console.log(counters);
    return (
        <div>
            <Total data={counters}/>
            <Average data={counters}/>
            <Percentage data={counters}/>
        </div>
    );
};

export default Statistics;
