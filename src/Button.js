import './Button.css'

export const Button = ({onClick, text}) => {
    return <button className="Button" onClick={onClick}>{text}</button>
}