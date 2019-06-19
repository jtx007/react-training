import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, selectVideo }) => {


    return (
        <div onClick={() => selectVideo(video)} className="item video-item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;