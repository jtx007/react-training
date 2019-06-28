import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'
class App extends Component {

    state = {
        language: 'English'
    }

    onLanguageChange = (language) => {
        this.setState({
            language
        })
    }

    render() {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                <LanguageContext.Provider value={this.state.language}>
                <ColorContext.Provider value={'red'}>
                    <UserCreate  />
                </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App