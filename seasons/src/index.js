import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'


export default class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            error => {
                this.setState({
                    errorMessage: error.message
                })
            }
        )
    }

    componentDidUpdate() {
        console.log('component re-render!!!')
    }

    renderContent = () => {
        if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            }

        if (!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay latitude={this.state.lat} />
            }

            return <Loader />
    }
    
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}





ReactDOM.render(<App />, document.querySelector('#root'))