import React from 'react'
import Card from '../Components/Cards/Card'

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Home