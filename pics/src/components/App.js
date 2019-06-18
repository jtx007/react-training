import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends Component {

    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID'
            }
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App