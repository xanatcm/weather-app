import React from 'react'

//Router
import { Link } from 'react-router-dom';


const CityInformation = ({city, weather, id}) => {

   
    return (
        <div 
            className="flex justify-center items-center 
            flex-col m-12 mx-auto w-96 h-6/12 bg-yellow rounded-xl shadow-lg"
        >

            <h2 className="text-3xl font-semibold p-3">{city}</h2>
            
            <p className="text-2xl font-medium p-1">{`${Math.round(weather)} °C`}</p>

            
            
            <button 
                className="text-1xl text-navy font-medium p-3 m-2 bg-pink rounded-lg "
            >
            <Link to={`/${city}/${id}`}> See more </ Link>
                
            </button>

        </div>
    )
}

export default CityInformation
