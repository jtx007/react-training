import React, { Component } from 'react'

export default class SearchBar extends Component {

    
    state = { term: ''}

    handleInputChange = (event) => {
        this.setState({ term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onInputSubmit(this.state.term)
        
        // Make sure to call callback from parent component
    }

    

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field"> 
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}