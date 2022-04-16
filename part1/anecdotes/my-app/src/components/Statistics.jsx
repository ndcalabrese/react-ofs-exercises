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
        <table>
            <tr>
                <td>
                    <StatisticsLine displayText="good" displayCount={counters[0]}/>
                </td>
            </tr>
            <tr>
                <td>
                    <StatisticsLine displayText="neutral" displayCount={counters[1]}/>
                </td>
            </tr>
            <tr>
                <td>
                    <StatisticsLine displayText="bad" displayCount={counters[2]}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Total data={counters}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Average data={counters} total={totalCount}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Percentage data={counters}/>
                </td>
            </tr>
        </table>
    );
};

export default Statistics;
