import React, { Component } from 'react';

class LanguageSelector extends Component {
    render() {
        return (
            <div>
                Select a language: 
                <i onClick={() => this.props.onLanguageChange('English')} className="flag us" />
                <i onClick={() => this.props.onLanguageChange('Dutch')}className="flag nl" />     
            </div>
        )
    }
}

export default LanguageSelector