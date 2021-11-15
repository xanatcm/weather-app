import React, {useState ,useEffect} from 'react'

//Router
import { useParams } from 'react-router-dom';

//Costume
import Header from "../../Components/Custom/Header/Header";
import Loader from '../../Components/Custom/Loader/Loader';

//Components
import SeeMore from "../../Components/MoreInfo/SeeMore/SeeMore"

const MoreInfo = () => {
    
    //State
    const [moreInfo, setMoreInfo] = useState(null)
    const [loader, setLoader] = useState(false)

    //RouterHooks
    const { name } = useParams();

    useEffect(() => {
        
        const handleSingleCity = async () => {
            
            setMoreInfo(null);
            setLoader(true);

            
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=es&appid=${process.env.REACT_APP_API_KEY}`
            const response = await fetch(API);
            const result = await response.json();
            setMoreInfo(result);
            console.log(result)
            setLoader(false)
        }

        handleSingleCity();

    }, [])
    

    return (
        
        <> 
        <Header />

        {
            loader ? <Loader /> : 
        

        <SeeMore 

            key={moreInfo?.id}
            name={moreInfo?.name}
            mainTemp={moreInfo?.main.temp}
            mainWeather={moreInfo?.weather[0].main}
            description={moreInfo?.weather[0].description}
            maxWeather={moreInfo?.main["temp_max"]}
            minWeather={moreInfo?.main["temp_min"]}
            
        />
        }
        
        </>

    )
}

export default MoreInfo
