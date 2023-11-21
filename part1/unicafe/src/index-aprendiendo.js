import React, { useState} from 'react'
import  { createRoot }  from 'react-dom/client';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({text, handleClick}) => {
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}


const App = () => {

    const [counter, setCounter] = useState(0);
    
    const [clicks, setClicks] = useState(
        {
            izquierda: 0,
            derecha: 0
        }
    )

    const [allClicks, setAll] = useState([])
    const [left, addLeft] = useState(0)
    const [right, addRight] = useState(0)


    // setTimeout(() => {
    //     setCounter(counter + 1)
    // }, 1000)

    const handleLeftArrayClicks = () => {
        setAll(allClicks.concat('L'))
        addLeft(left + 1)
    }
    const handleRightArrayClicks = () => {
        setAll(allClicks.concat('R'))
        addRight(right + 1)
    }

    const handleClick = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)

    const handlerClickIzq = () => setClicks({...clicks, izquierda: clicks.izquierda + 1})

    const handlerClickDer = () => setClicks({...clicks, derecha: clicks.derecha + 1})

    const setClicksToZero = () => {
        setClicks({izquierda: 0, derecha: 0})
    }

    return (
        <div>
            <div>
                <Display counter={counter} />
                <Button text={"Aprietame"} handleClick={handleClick} />
                <Button text={"Reset"} handleClick={setToZero} />
            </div>
            <div>
                <hr />
            </div>
            <div>
                {clicks.izquierda}
                <Button text={"Izquierda"} handleClick={handlerClickIzq} />
                <Button text={"Derecha"} handleClick={handlerClickDer} />
                {clicks.derecha}
                <Button text={"Zero"} handleClick={setClicksToZero} />
            </div>
            <div>
                <hr />
            </div>
            <div>
                {left}
                <Button text={"Izquierda"} handleClick={handleLeftArrayClicks} />
                <Button text={"Derecha"} handleClick={handleRightArrayClicks} />
                {right}
                <div>
                    {allClicks.join(' ')}
                </div>
                <div>
                    Total: {allClicks.length}
                </div>
            </div>

        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);