import Header from "./components/Header.jsx";
import { ways } from "./data.js"

function WayToTeach (props) {
    console.log(props)
    return (
        <li>
            <p>
                <strong>{props.title}</strong> {props.description}
            </p>
        </li>
    )
}


export default function App() {
    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Наш подход к обучению</h3>

                    <ul>
                        <WayToTeach
                            title={ways[0].title}
                            description={ways[0].description} // здесь так оставлено для примера. В общем пропсы это
                                                                // массив ts или js, который можно передавать в компоненты по индексами прям как в массиве прикольно да
                        />
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[2]}/>
                        <WayToTeach {...ways[3]}/>
                    </ul>
                </section>
            </main>
        </div>
    )
}


