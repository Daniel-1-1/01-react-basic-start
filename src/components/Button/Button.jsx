import "./Button.css"

const Button = ({ children, onClick }) => {  //можно назвать onTouch мы его передаем как функцю в онклик, придумываем сами

    return (
        <button className="button active" onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;