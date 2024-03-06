import React from 'react'
import Card from '../Components/Card'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <>

      {/* Banner */}
      <Banner/>

      <div className="grid grid-cols-4 gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default Home