import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends Component {

    static contextType = LanguageContext

    render() {
        console.log(this.context)
        return (
            <div>
                Select a language: 
                <i onClick={() => this.context.onLanguageChange('English')} className="flag us" />
                <i onClick={() => this.context.onLanguageChange('Dutch')}className="flag nl" />     
            </div>
        )
    }
}

export default LanguageSelector