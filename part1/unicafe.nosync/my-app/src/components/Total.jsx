const Total = ({data}) => {
    return (
        <div>
            {/* Sum of all feedback types */}
            all {data[0] + data[1] + data[2]}
        </div>
    );
};

export default Total;
