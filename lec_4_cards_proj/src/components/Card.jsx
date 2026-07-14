import React from "react"
import { Bookmark } from "lucide-react";
const Card = (props)=>{
        console.log(props.company);
    return ( 
   
      
      <div className="card">
      
        <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save <Bookmark size={19}/>
          </button>
        </div>
        <div className="center">
          <h2>
            {props.company} <span>{props.daysago}</span>
          </h2>
          <h3>{props.position}</h3>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$<span>{props.pay}</span>/hr</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    )
}

export default Card;