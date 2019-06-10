import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'



export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null
        }
    }
    
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        )
        return (
            <div>
            Hello
            <SeasonDisplay/>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.querySelector('#root'))