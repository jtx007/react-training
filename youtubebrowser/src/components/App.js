import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onInputSubmit('CyberPunk 2077 Keanue Reeves')
    }

    onInputSubmit = async (term) => {
    const response =  await youtube.get('/search', {
            params: {
                q: term
            }
        })
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    selectVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onInputSubmit={this.onInputSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList selectVideo={this.selectVideo} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}