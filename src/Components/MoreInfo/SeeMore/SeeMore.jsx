import React from 'react'

//Router
import { Link } from 'react-router-dom'

//Images
import 'boxicons'



const SeeMore = ({city, mainWeather, maxWeather, minWeather, mainTemp}) => {

    

    return (
        
       <div 
        className=
            "flex justify-center items-center flex-col m-12 mx-auto w-96 h-6/12 bg-yellow rounded-xl shadow-lg"
        >

           
           <div className=" p-2 flex justify-center items-center text-9xl">
           {   
            mainWeather === "Clouds" ? <box-icon name='cloud' color="navy" size="lg"></box-icon>
            : mainWeather === "Rain" ? <box-icon name='cloud-drizzle' color="navy" size="lg"></box-icon>
            : mainWeather === "Clear" ? <box-icon name='sun' color="navy" size="lg"></box-icon> 
            : mainWeather === "Haze" ? <box-icon name='water' color="navy" size="lg"></box-icon> 
            : mainWeather
           }
           </div>
        
           
           <h3 className="text-7xl font-medium p-3 text-coral">{`${Math.round(mainTemp)} °C`}</h3>
           <p className="text-2xl font-semibold p-1 text-navy">{city}</p>
           <p className="text-1xl font-medium p-1 text-navy">{`Min: ${Math.round(maxWeather)} °C`}</p>
           <p className="text-1xl font-medium p-1 text-navy">{`Max: ${Math.round(minWeather)} °C`}</p>

           <button className="text-1xl text-navy font-medium p-3 m-2 bg-pink rounded-lg ">
               <Link to="/">Go back</Link>
            </button>
       </div>
       
    
    )
    
}

export default SeeMore
