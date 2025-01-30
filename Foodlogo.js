import React from 'react'

const Foodlogo = ({items}) => {
    // console.log(items);
    
  
  return (
    <div className='items'> 
    
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${items.imageId}`} alt = "Food" />
    {/* <h1>{items.action.text}</h1> */}
    </div>
  )
}

export default Foodlogo