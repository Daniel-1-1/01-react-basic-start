import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from "react";
import { ways,differences } from "./data.js"

export default function App() {
    const [ contentType, setContentType] = useState(null) // нельзя писать их вне компонента или другого хука и только на верхнем уровне надо


    function handleCLick(type) {
        setContentType(type)
    }

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
                                                                // массив ts или js, который можно передавать в компоненты по индексам прям как в массиве прикольно да
                                                                // оказывается не только массив, а значения в функциях типо text(пример здесь) и children
                        />
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[2]}/>
                        <WayToTeach {...ways[3]}/>
                    </ul>
                </section>
                <section>
                    <h3>Чем мы отличаемся от других</h3>

                    <Button onClick={() => handleCLick('way')}>Подход</Button>
                    <Button onClick={() => handleCLick('easy')}>Доступность</Button>
                    <Button onClick={() => handleCLick('program')}>Концентрация</Button>

                    {contentType ? (
                        <p>{differences[contentType]}</p>
                        ) : (
                        <p>Нажми на кнопку</p>
                        )}
                </section>
            </main>
        </div>
    )
}


