import React from 'react'

const Main = () => {
  return (
    <div>
      <input
        type="range"
        className="pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
      />
    </div>
  ) // Just for redirect
}

export default Main

//[&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500
