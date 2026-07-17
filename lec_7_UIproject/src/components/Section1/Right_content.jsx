import React from 'react'
import RightCard from './RightCard'

const Right_content = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto flex flex-no-wrap gap-10 w-3/4 pb-5 pt-5    '>
 {props.users.map(function(elem , idx){
     return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
 })}
    
        </div>
  )
}

export default Right_content