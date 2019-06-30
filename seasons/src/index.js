import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'
import useLocation from './useLocation'


const App = () => {

        const [lat, errorMessage] = useLocation()

    

        let content;
        if (errorMessage) {
            content = <div>{errorMessage}</div>
        } else if (lat) {
            content = <SeasonDisplay lat={lat} />
        } else {
            return <Loader />
        }
        return <div className="border-red">{content}</div>
}







ReactDOM.render(<App />, document.querySelector('#root'))