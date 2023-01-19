import { useState } from 'react'
import rover from './assets/mars-rover.png'
import './App.css'

function App() {
  return (
    <div className="bg-red-500 customfont h-screen w-screen flex justify-center">
      <div className="mt-3 border rounded mx-2 p-0 mb-28 resizeable w-9/12">
        <img 
          src={rover} 
          className="rover ml"
          />
      </div>

      <div className="text-black absolute bottom-0 place-self-center grid w-64 place-items-center">
        <div className="bg-white rounded-t-lg text-dark p-2 d-block w-2/3 border-bottom-0 rounded-bottom-0 row-span-1 text-center">
          <p className="inline text-xl">X: 0 | Y: 0</p>
        </div>
        <div className="bg-white row-span-1 min-w-full block rounded-t-lg text-center">
            <button className="p-2 hover:bg-gray-200 rounded-md m-1 min-w-[55px]">
              <i className="fa-solid fa-rotate-left text-4xl"></i>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md m-1 min-w-[55px]">
              <i className="fa-solid fa-arrow-up text-4xl"></i>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md m-1 min-w-[55px]">
              <i className="fa-solid fa-rotate-right text-4xl"></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
