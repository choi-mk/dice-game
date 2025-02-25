
import {Dice} from "./Dice.js"





export const Board = ({color, num=1, gameHistory}) => {
  

  

  return (
    <div>
      <Dice color={color} num={num}/>
      
      <div>
        {gameHistory.join(',')}
      </div>
    </div>
  );
}


