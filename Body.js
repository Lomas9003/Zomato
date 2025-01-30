import React, { useEffect, useState } from 'react'
import { res_API } from '../utils/constants'
import ResturantCards from './ResturantCards'
import Shimmer from './Shimmer'
import { Link } from "react-router"


const Body = () => {

    const[resturantList , setresturantList]  = useState([])
    const[filterResturantList , setfilterresturantList]  = useState([])
    const[serchText , setSerchtext] = useState("")
    // const[logoList , setlogoList]  = useState([]) ; 


    

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const data = await fetch(res_API)
      const json = await data.json(); 

      // console.log(json);
      
      setresturantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilterresturantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      // setlogoList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
      
    }

  return (
    resturantList.length === 0 ? 
    <Shimmer/> :
    <div className='mainBody'>
      <div className='buttons'>
        <h1>What is on your mind ?</h1> 

{/* Search bar */}

        <div className='searchBar'>
            <input 
            type='text'
            value= {serchText}
            onChange={(e) => setSerchtext(e.target.value)}
            />
            <button onClick={() => {
            const filterresturantList = resturantList.filter((rest) => (
              rest.info.name.toLowerCase().includes(serchText.toLowerCase())
            ))
            setfilterresturantList(filterresturantList)
            }}>
              Search
            </button>
        </div>  

{/* Top rated resturant */}
<div className='button-container'>
          <div className='topResturant'>
                <button 
                onClick={() => {
                  const top = resturantList.filter((top) => (
                    top.info.avgRating > 4
                  ))
                  setfilterresturantList(top)
                }}
                >
                  Top Rated
                </button>
            </div>

{/* Fast Delivery */}
          <div className='fast'>
            <button onClick={() => {
              const fast = resturantList.filter((fast) => (
                fast.info.sla.deliveryTime < 30
              ))
              setfilterresturantList(fast)
            }}> 
                Fast Delivery
            </button>
            </div>      
 {/*Less them 200  */}
        
        <div className='lessCost'>
            <button onClick={() => {
              const less = resturantList.filter((less) => (
                less.info.costForTwo.includes('₹200 for two')

              ))
              setfilterresturantList(less)
            }}>
              Less tham 200/-
            </button>
        </div>
    </div>
</div>
{/*Resturant list   */}
        <div className='resturantList'>
            {
              filterResturantList.map((resturant) => (
          <Link to = '/home/resturantMeanu'>
                  <ResturantCards key={resturant?.info?.id} resDeatiles = {resturant} /> 
                  </Link>  
              ))
            }
        </div>
    </div>
  )
}

export default Body  