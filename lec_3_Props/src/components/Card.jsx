function Card(props){

    console.log(props.age,props.name);
    
    return <div className="card">
        
      <img src={props.img} alt="" />
      <h1>{props.name}<br/> age :{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
}

export default Card;