import React from 'react'


function Hello(props) {
  return [
    <button className={`${props.color}`}>Hi Kids this is your dad! {props.children}</button>
  ]
}

function App() {
  return (
    <div className='bg-blue-200 h-screen flex justify-center items-center '>
      <Hello color='bg-blue-700 py-1 px-3 rounded-md text-2xl text-white'></Hello>
    </div>
  )
}

export default App
