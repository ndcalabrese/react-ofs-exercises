const Button = ({action, buttonText}) => {
    return (
        <>
            <button onClick={action}>
                {buttonText}    
            </button>
        </>
    );
};

export default Button;
