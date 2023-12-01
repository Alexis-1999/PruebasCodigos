import ReactDOM from "react-dom";
import { useState } from 'react'


const rootElement = document.getElementById('root');

const Counter = ({number})=>{
  return <h1>{number}</h1>
}


const App = (props)=>{



  const [contadorValue, updateContador] = useState(0)

  // const contadorValue = contador[0]
  // const updateContador = contador[1]

  // setInterval(()=>{
  //   updateContador(contadorValue + 1)
  // },2000)

  const handleClick =()=>{
    updateContador(contadorValue + 1)
  }

  const handleClickReset =()=>{
    updateContador(0)
  }

  const isEven = contadorValue % 2 === 0

  return (
    <>
    <p>El valor del contador es:</p>
      {/* <h1>{contadorValue}</h1> */}
      <Counter number={contadorValue} />
      <h1>{isEven ? 'Es par' : 'Es impar'}</h1>
      <button onClick={handleClick
        
        // updateContador(prevContador => {
        //   return prevContador + 1
        // })
      }>
        Incrementar
      </button>

      <button onClick={handleClickReset}>
        Reset
      </button>
    </>
  )
}



ReactDOM.render(<App />,rootElement);


