import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title={selectedVideo.snippet.title} src={videoSrc}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="header">{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail