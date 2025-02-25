import {useState} from "react"
import {Board} from "./Board.js"
import {Button} from "./Button.js"


const random = n => Math.ceil(Math.random() * n)

function App() {
  const [gameHistory1, setGameHistory1] = useState([])
  const [gameHistory2, setGameHistory2] = useState([])
  
  const handleClick = ( ) => {
      const nextNum1 = random(6)
      // setNum1(nextNum1)
      setGameHistory1([...gameHistory1,nextNum1])
      const nextNum2 = random(6)
      // setNum2(nextNum2)
      setGameHistory2([...gameHistory2,nextNum2])
    }
    const handleReset = () => {
      // setNum1(1)
      setGameHistory1([])
      // setNum2(1)
      setGameHistory2([])
    }
  
  
  return (
    
    <div>
      <Board color="blue" num={gameHistory1.at(-1)} gameHistory={gameHistory1}/>
      <Board color="red" num={gameHistory2.at(-1)} gameHistory={gameHistory2}/>
      <Button onClick={handleClick} text="던지기" />
      <Button onClick={handleReset} text="처음부터" />
    </div>
  );
}

export default App;
