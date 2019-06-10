import React from 'react'

const Comment = (props) => {
    return (
        <div className="comment">
                <a className="avatar" href="/">
                    <img src={props.avatar} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.time}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
        </div>
    )
}

export default Comment