import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Banner from '../Components/Banner'

const Home = () => {

  const [foodCate, setFoodCate] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    // console.log(data)
    setFoodItem(data[0])
    setFoodCate(data[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>

      {/* Banner */}
      <Banner/>

      <div>
        {
          foodCate != [] 
          ? foodCate.map((data) => {
            return(
              <div key={data._id} className='mt-5'>
                <h3 className='text-2xl font-semibold'>{data.CategoryName}</h3>

                <hr className='mb-3 mt-5 bg-[#ff4121] h-[2px]'/>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4">
                  {
                    foodItem != [] 
                    ? foodItem.filter((item) => item.CategoryName === data.CategoryName)
                    .map(filterItems => {
                      return(
                        <div key={filterItems._id}>
                          <Card img={filterItems.img} heading={filterItems.name} desc={filterItems.description} options={filterItems.options}/>
                        </div>
                      )
                    })
                    : ""

                  }
                </div>
              </div>
            )
          }) 
          : <div>hello</div>
        }
      </div>
    </>
  )
}

export default Home