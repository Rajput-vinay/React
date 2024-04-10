import { useState } from "react"

function App(){
  const [bgColor,setBgColor] =useState('olive')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:bgColor}}>
    <div className="flex flex-row  justify-center rounded-3xl  h-14 bg-violet-500 gap-6">
      <div className="gap-5 flex flex-row ">
        <button className="h-10  w-16 text-white rounded-xl mt-2 bg-red-600"  onClick={()=>setBgColor('red')}>red</button>
        <button className="h-10  w-16 text-white rounded-xl mt-2 bg-yellow-500" onClick={()=>setBgColor('yellow')} >yellow</button>
        <button className="h-10  w-16 text-white rounded-xl mt-2 bg-green-900 " onClick={()=>setBgColor('green')}>green</button>
        <button className="h-10  w-16 text-white rounded-xl mt-2 bg-pink-500" onClick={()=>setBgColor('pink')}>pink</button>
        <button className="h-10  w-16 text-white rounded-xl mt-2 bg-gray-500" onClick={()=>setBgColor('gray')}>gray</button>
        <button className="h-10  w-16 text-white rounded-xl mt-2 bg-purple-900" onClick={()=>setBgColor('purple')}>purple</button>
   
      </div>
    </div>

    </div>
  )
}

export default App