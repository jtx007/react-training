import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
class Button extends Component {

    renderSubmit = (language) =>  {
        return language === 'English' ? 'Submit' : 'Voorleggen'
    }

    renderButton = (color) => {
        return ( 
            <button className={`ui ${color} button`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color) } 
            </ColorContext.Consumer>
        )
    }
}

export default Button