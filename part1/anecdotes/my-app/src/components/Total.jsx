const Total = ({data}) => {
    return (
        <>
            {/* Sum of all feedback types */}
            all {data[0] + data[1] + data[2]}
        </>
    );
};

export default Total;
