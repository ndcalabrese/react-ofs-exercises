const Average = ({data, total}) => {
    const posNegCount = data[0] + (data[2] * -1);
    return (
        <div>
            {/* Tally up total positive feedback against negative feedback, and divide by total feedback */}
            average {posNegCount / total}
        </div>
    );
};

export default Average;
