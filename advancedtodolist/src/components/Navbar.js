import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="ui secondary menu">
            <Link to="/" className="ui item">
                All Todos
            </Link>
            <Link to="/new" className="ui item">
                Create New Todo
            </Link>
        </div>
    )
}

export default Navbar