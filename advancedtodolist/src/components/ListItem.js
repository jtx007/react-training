import React from 'react';
import { Link } from 'react-router-dom'
const ListItem = ({ todo }) => {

    


    return (

            <div className="card">
                <div className="content">
                    <Link to={`/show/${todo.id}`}>
                        <i className="icon ui right floated mini image paper plane" />
                    </Link>
                <div className="header">
                    Title: {todo.title}
                </div>
                <div className="meta">
                    Due Date: {todo.duedate}
                </div>
                <div className="description">
                    Description: {todo.description}
                </div>
            </div>
            </div>
        
    )
}

export default ListItem