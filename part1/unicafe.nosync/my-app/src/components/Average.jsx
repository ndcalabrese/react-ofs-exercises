const Average = ({data, totalCount}) => {
    const posNegCount = data[0] + (data[2] * -1);
    console.log(totalCount);
    return (
        <div>
            {/* Tally up total positive feedback against negative feedback, and divide by total feedback */}
            average {posNegCount / totalCount}
        </div>
    );
};

export default Average;
