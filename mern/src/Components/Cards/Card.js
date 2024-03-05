import React from 'react'
import Btn from '../Btn'

const Card = () => {
  var img = "https://media.istockphoto.com/id/612759522/photo/fake-junk-food-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=zI-m6WyTpm-imNeQLoASndk5VpAETKebPpZomSmgnas="
  return (
    <>
        <div className="border p-4 rounded-md">
            <div className="imgdiv">
                <img src={img} className='w-full' alt="image" />
            </div>
            <div className="con">
                <h3>Heading</h3>
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias fuga error ipsa eveniet! Labore, possimus animi. Sapiente, temporibus inventore.</p>
                <div className="flex mb-3 gap-3">
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
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                  </select>
                </div>
                <Btn BTNDATA={"Buy"} Route={"/"}/>
            </div>
        </div>
    </>
  )
}

export default Card