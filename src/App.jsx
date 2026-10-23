import React from "react";
import { useState } from "react";


function App() {
const[value, setValue] = useState("")

function handleClick(item){
    setValue(value + item)
}

function Calculate(){
    setValue (eval (value))
}

function clearValue(){
    setValue("")
}

function deleteValue(){
    setValue(value.slice(0, -1))
}
 

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 flex items-center justify-center">

      <div className="w-[380px] bg-gray-900 p-5 rounded-2xl shadow-2xl">

        
        <input
          type="text"
          placeholder="0"
          value={value}
          className="w-full h-24 mb-5 bg-gray-800 text-white text-right text-4xl px-5 rounded-xl outline-none"
          readOnly
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          <button onClick={clearValue} className="h-16 bg-red-500 rounded-xl text-white text-2xl">
            C
          </button>

          <button onClick={deleteValue} className="h-16 bg-gray-600 rounded-xl text-white text-2xl">
            DEL
          </button>

          <button onClick={() => (handleClick("%"))} className="h-16 bg-gray-600 rounded-xl text-white text-2xl">
            %
          </button>

          <button onClick={() => (handleClick("/"))}  className="h-16 bg-orange-500 rounded-xl text-white text-2xl">
            ÷
          </button>

          <button onClick={() => (handleClick("7"))}  className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            7
          </button>

          <button onClick={() => (handleClick("8"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            8
          </button>

          <button onClick={() => (handleClick("9"))}  className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            9
          </button>

          <button onClick={() => (handleClick("*"))}   className="h-16 bg-orange-500 rounded-xl text-white text-2xl">
            ×
          </button>

          <button onClick={() => (handleClick("4"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            4
          </button>

          <button onClick={() => (handleClick("5"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            5
          </button>

          <button onClick={() => (handleClick("6"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            6
          </button>

          <button onClick={() => (handleClick("-"))}   className="h-16 bg-orange-500 rounded-xl text-white text-2xl">
            −
          </button>

          <button onClick={() => (handleClick("1"))}  className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            1
          </button>

          <button onClick={() => (handleClick("2"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            2
          </button>

          <button onClick={() => (handleClick("3"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            3
          </button>

          <button onClick={() => (handleClick("+"))}   className="h-16 bg-orange-500 rounded-xl text-white text-2xl">
            +
          </button>

          <button onClick={() => (handleClick("0"))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl col-span-2">
            0
          </button>

          <button onClick={() => (handleClick("."))}   className="h-16 bg-gray-700 rounded-xl text-white text-2xl">
            .
          </button>

          <button onClick={Calculate} className="h-16 bg-green-500 rounded-xl text-white text-2xl">
            =
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;