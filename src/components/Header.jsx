import logo from "/public/logo-name.svg"


export default function Header() {
    const now = new Date()
    const name = 'Result'

    return (
        <header>
            <img src={logo} alt={name}/>
            {/*<h3>Result university</h3>*/}

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
}
