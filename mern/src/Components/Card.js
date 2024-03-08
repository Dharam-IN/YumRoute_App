import React from 'react'
import Btn from './Btn'

const Card = ({img, heading, desc, options}) => {
  // var img = "https://media.istockphoto.com/id/612759522/photo/fake-junk-food-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=zI-m6WyTpm-imNeQLoASndk5VpAETKebPpZomSmgnas="

  console.log(options)
  const keyoption = Object.keys(options[0])
  // console.log(keyoption)

  return (
    <>
        <div className="border p-4 rounded-md">
            <div className="imgdiv">
                <img src={img} className='w-full h-[250px] object-cover' alt="image" />
            </div>
            <div className="con">
                <h3>{heading}</h3>
                <p className='mb-3'>{desc}</p>
                <div className="flex mb-3 gap-3 items-center">
                  <select name="" className='py-2 px-3'>
                    {
                      Array.from(Array(6), (e,i) => {
                        return(
                          <option key={i+1} value={i+1}>{i+1}</option>
                        )
                      })
                    }
                  </select>

                  <select name="" className='py-2 px-3'>
                    {
                      keyoption.map((data) => {
                        return(
                          <option key={data} value={data}>{data}</option>
                        )
                      })
                    }
                  </select>

                  <p>Price:- </p>
                </div>
                <Btn BTNDATA={"Buy"} Route={"/"}/>
            </div>
        </div>
    </>
  )
}

export default Card