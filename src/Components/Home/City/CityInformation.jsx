import React from 'react'

//Router
import { Link } from 'react-router-dom';


const CityInformation = ({name, weather, id}) => {

    //hooks
    /*const history = useHistory()
    const location = useLocation()
    const params = useParams()*/

    //Functions
    /*const handleHistory = () => {
        history.push(`/weather/${name}`)
        console.log(location)
        console.log(params)
    }*/

    return (
        <div 
            className="flex justify-center items-center 
            flex-col m-12 mx-auto w-96 h-6/12 bg-yellow rounded-xl shadow-lg"
        >

            <h2 className="text-3xl font-semibold p-3">{name}</h2>
            
            <p className="text-2xl font-medium p-1">{`${Math.round(weather)} °C`}</p>

            
            
            <button 
                className="text-1xl text-navy font-medium p-3 m-2 bg-pink rounded-lg "
            >
            <Link to={`/${name}/${id}`}> See more </ Link>
                
            </button>

        </div>
    )
}

export default CityInformation
