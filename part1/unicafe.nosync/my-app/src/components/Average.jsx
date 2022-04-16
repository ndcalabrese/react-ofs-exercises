const Average = ({data}) => {
    const posNegCount = data[0] + (data[2] * -1);
    const totalCount = data[0] + data[1] + data[2];
    return (
        <div>
            {/* Tally up total positive feedback against negative feedback, and divide by total feedback */}
            average {posNegCount / totalCount}
        </div>
    );
};

export default Average;
