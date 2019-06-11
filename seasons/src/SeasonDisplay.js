import React from 'react'
import './SeasonDisplay.css'
const SeasonDisplay = (props) => {

    const seasonConfig = {
        winter: {
            iconName: 'snowflake',
            text: 'BRRR, it chilly'
        },
        summer: {
            iconName: 'sun',
            text: 'TO the beach!'
        }
    }

    const { latitude } = props
    const getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter'
        } else {
            return lat < 0 ? 'winter' : 'summer'
        }
    }

    const season = getSeason(latitude, new Date().getMonth())
    const { iconName, text} = seasonConfig[season]
    console.log(props)
    return <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
        <i className={`icon-right ${iconName} icon massive`} />
    </div>

}

export default SeasonDisplay