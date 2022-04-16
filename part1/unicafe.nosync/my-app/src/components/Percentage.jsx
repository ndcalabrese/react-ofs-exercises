const Percentage = ({data}) => {
    const totalCount = data[0] + data[1] + data[2];
    return (
        <div>
            {/* Positive feedback divided by total feedback */}
            positive {data[0] / totalCount * 100} %
        </div>
    );
};

export default Percentage;
