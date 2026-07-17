import React from 'react'

const Rightcardcontent = (props) => {
  return (
    
           <div className="absolute left-0 top-0 h-full w-full p-6 flex flex-col justify-between">
        <h1 className="bg-white text-2xl font-bold rounded-full flex h-10 w-10 items-center justify-center">{props.id +1}</h1>
        <div>
            <p className="text-shadow-10xs text-base text-white font-semibold leading-[1.2] mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab animi inventore deserunt corporis, i quod doloremque.</p>
            <button style={{backgroundColor:props.color}} className="text-base text-white font-semibold px-6  border-2 border-solid border-black rounded-full mr-1">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className="text-base text-white  font-semibold px-3  border-2 border-solid border-black rounded-full"><i className="ri-arrow-right-line"></i></button>
        </div>
    </div>
    
  )
}

export default Rightcardcontent