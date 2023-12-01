import { useState } from "react";
import  ReactDOM  from "react-dom";
import './App.css';

const WarningNotUsed = () => {
    return <p>No se a utilizado todavia el contador</p>
}

const ListOfClicks = ({clicks}) =>{
    return <p>{clicks.join(', ')}</p>
}


const App=() => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    const [clicks, setClicks] = useState([])

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Menjsae en el estado'
    })

    const handleClickLeft = ()=>{
        setCounters({
            ...counters,
            left: counters.left + 1
        })

        setClicks([...clicks, 'L'])
    }

    
    const handleClickRight = ()=>{
        setCounters({
            ...counters,
            right: counters.right + 1
        })

        setClicks([...clicks, 'R'])
    }

    return(
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>
                left
            </button>
            <button onClick={handleClickRight}>
                right
            </button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            {/* <ListOfClicks clicks={clicks}/> */}
            {clicks.length === 0 
            ? <WarningNotUsed /> :
            <ListOfClicks clicks={clicks}/>}
        </div>
    )
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />,rootElement);
