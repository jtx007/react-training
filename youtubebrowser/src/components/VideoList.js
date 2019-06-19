import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, selectVideo }) => {

    const renderedList =  videos.map((video) => {
        return <VideoItem 
        key={video.id.videoId} 
        selectVideo={selectVideo} 
        video={video}/>
    })


    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList