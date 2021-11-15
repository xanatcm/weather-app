import React, {useState} from 'react'

//Components
import WeatherForm from "../../Components/Home/Form/WeatherForm"
import CityInformation from "../../Components/Home/City/CityInformation"
import Header from '../../Components/Custom/Header/Header'
import Loader from "../../Components/Custom/Loader/Loader"


const Home = () => {
    //State
    const [cityName, setCityName] = useState("");
    const [cityInfo, setCityInfo] = useState(null);
    const [loader, setLoader] = useState(false);

    //Funciones

    const handleCity = ({ value }) => {
        setCityName(value);
    };

    const handleSearchApi = async e => {
        e.preventDefault();
        
        setCityInfo(null);
        setLoader(true);

        try{
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=es&appid=${process.env.REACT_APP_API_KEY}`
            const response = await fetch(API);
            const result = await response.json();
            setCityInfo(result);
            console.log(result)
            setLoader(false)
        }catch (error) {
            alert("City not found")
        }

    };
        
    
    
    return (
        <div className="">

            <Header />

            <WeatherForm 
                handleCity={handleCity}
                cityName={cityName}
                handleSearchApi={handleSearchApi}
            />

            {
                loader && <Loader />
            }

            {
                cityInfo ? (
                    <CityInformation name={cityInfo.name} weather={cityInfo.main.temp} id={cityInfo.id}/>
                ) 
                : null
        
            }
        </div>
    )
}

export default Home
