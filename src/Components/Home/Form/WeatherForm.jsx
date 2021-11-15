import React from 'react'



const WeatherForm = ({handleCity, cityName, handleSearchApi}) => {
    return (
        <>
        
        <form 
            action="" 
            onSubmit={(e) => handleSearchApi(e)} 
            className= "flex justify-center m-4"
        >

            <input 
                
                type="text" 
                placeholder="City Name" 
                onChange={({ target }) => handleCity(target)}
                value={cityName}
                className=" h-8 p-2 m-4 rounded-lg bg-blue text-navy font-normal"
                
            />
            <input
                
                type="submit" 
                value="Search" 
                className="h-8 px-8 m-4 rounded-lg bg-pink font-medium text-navy"
            
            />
        </form>
        </>
    )
}

export default WeatherForm
