import React from 'react';
import { NavLink } from 'react-router-dom';

const Btn = ({BTNDATA, Route}) => {
  return (
    <>
        <NavLink className="bg-[#FF4121] hover:bg-[#FF7B62] px-5 py-2 text-white font-semibold text-1xl" to={`${Route}`} >{BTNDATA}</NavLink>
    </>
  )
}

export default Btn