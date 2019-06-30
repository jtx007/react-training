import React from 'react'
import useResources from './useResources'




const ResourceList = ({ resource }) => {

    const resources = useResources(resource)
    

    

        return (
            <ul>
                {resources.map(resource => <li key={resource.id}>{resource.title}</li>)}
            </ul>
        )
    
}

export default ResourceList