import React, { Component } from 'react'

export default class ImageCard extends Component {

    constructor(props) {
        super(props)
        this.imageRef = React.createRef()
        this.state = { spans: 0}
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }

    componentDidMount() {
        /* We need to wait for the images to load in order to access the DOM properties so we added an
        event listener to make sure the images load in first before accessing any properties*/
        this.imageRef.current.addEventListener('load', this.setSpans)

    }

    render() {

        const {description, urls} = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                ref={this.imageRef}
                alt={description} 
                src={urls.regular}
                />
            </div>
        )
    }
}
