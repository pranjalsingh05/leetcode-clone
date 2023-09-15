import React from 'react'

const Difficulty = ({difficulty}) => {
    
    const color=difficulty==="Easy"?"text-green-500":difficulty==="Medium"?"text-yellow-500":"text-red-500"
  return (
    <span className={`${color}`}>{difficulty}</span>
  )
}

export default Difficulty