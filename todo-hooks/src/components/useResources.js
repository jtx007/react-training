import {useState, useEffect} from 'react'
import JsonPlaceHolder from '../api/JSONPlaceHolder'



const useResources = (resource) => {
    const [resources, setResources] = useState([])



    useEffect(
        () => {
            (async resource => {
                const response = await JsonPlaceHolder.get(`/${resource}`)
                setResources(response.data)
            })(resource)
        }, [resource]
    )
    return resources
}


export default useResources