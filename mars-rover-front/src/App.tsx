import './App.css'
import api from './services/axios';
import { useEffect, useState } from 'react'
import { Resizable } from "re-resizable";
import rover from './assets/mars-rover.png'


function App() {
  
  const directions = ['N', 'L', 'S', 'O']
  const [roverId, setRoverId] = useState(1);

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(10);
  const [facing, setFacing] = useState(0);

  useEffect(() => { 
    api.post("/api/v1/rover", 
      { 
        x_position: posX, 
        y_position: posY, 
        facing: directions[facing]
      }
    )
    .then((response) => {
      setRoverId(response.data.id)
      console.log(response)
    })
    .catch((err) => console.error("Algo deu errado!", err))
  }, [])

  function moveRover() {
    switch (facing) {
      case 0:
        (posY < 10) ? setPosY(posY + 1) : alert("Você não pode mais se mover nessa direção! 😢");
        break;
      case 1:
        (posX < 10) ? setPosX(posX + 1) : alert("Você não pode mais se mover nessa direção! 😢");
        break;
      case 2:
        (posY > 1) ? setPosY(posY - 1) : alert("Você não pode mais se mover nessa direção! 😢");
        break;
      case 3:
        (posX >= 1) ? setPosX(posX - 1) : alert("Você não pode mais se mover nessa direção! 😢");
        break;
      default:
        break;
    }

    api.put("/api/v1/rover/"+roverId, 
      {
        x_position: posX, 
        y_position: posY, 
        facing: directions[facing]
      }
    )
    .then((response) => {
      setRoverId(response.data.id)
      console.log(response)
    })
    .catch((err) => console.error("Algo deu errado!", err))
  }

  function rotateRover(clockWise: boolean): void {
    if(clockWise) {
      (facing == 3) ? 
        setFacing(0) : 
        setFacing(facing + 1); 
    } else {
      (facing == 0) ? 
        setFacing(3) : 
        setFacing(facing - 1); 
      }
  }

  return (
    <div className="bg-red-500 customfont h-screen w-screen flex justify-center">
      <Resizable defaultSize={{
        width: 1000,
        height: 550
        }} className="mt-3 border rounded mx-2 p-0 mb-28 min-w-9/12 resize">
        <img 
          src={rover} 
          className={"rover rml-" + posX * 10 + " rmt-" + posY * 10 + " rov-fac-" + facing}
          />
      </Resizable>

      <div className="text-black absolute bottom-0 place-self-center grid w-64 place-items-center">
        <div className="bg-white rounded-t-lg text-dark p-2 d-block w-2/3 border-bottom-0 rounded-bottom-0 row-span-1 text-center">
          <p className="inline text-xl">X: {posX} | Y: {posY - 1} </p>
        </div>
        <div className="bg-white row-span-1 min-w-full block rounded-t-lg text-center">
            <button className="p-2 hover:bg-gray-200 rounded-md m-1 min-w-[55px]" onClick={() => rotateRover(false)}>
              <i className="fa-solid fa-rotate-left text-4xl"></i>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md m-1 min-w-[55px]" onClick={() => moveRover()}>
              <i className="fa-solid fa-arrow-up text-4xl"></i>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md m-1 min-w-[55px]" onClick={() => rotateRover(true)}>
              <i className="fa-solid fa-rotate-right text-4xl"></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
