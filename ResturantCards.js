import React from 'react'

function ResturantCards({resDeatiles}) {
    
    // const {resDeatiles} = props
   return (
    <div className='items'>
        <div className='img'>
        <img className="logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resDeatiles.info.cloudinaryImageId}/>
    </div>
         <div className="res-name">
          <h3 className="font-bold py-4 text-lg">{resDeatiles.info.name}</h3>      
          <h3>{resDeatiles.info.cuisines.join(" , ")}</h3>      
          <h4>{resDeatiles.info.avgRating}</h4>      
          <h4>{resDeatiles.info.sla.slaString}</h4>      
          <h4>{resDeatiles.info.locality}</h4>      
        </div> 
    </div>
  )
}

export default ResturantCards