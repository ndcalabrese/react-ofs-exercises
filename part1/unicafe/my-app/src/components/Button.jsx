const Button = ({feedbackType, buttonText}) => {
    return (
        <>
            <button onClick={feedbackType}>
                {buttonText}    
            </button>
        </>
    );
};

export default Button;
