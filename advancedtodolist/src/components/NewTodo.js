import React from 'react';

const NewTodo = () => {
    return (
        <div className="ui container segment">
            <form className="ui form">
                <div className="field">
                    <label>Title:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Due By:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Description:</label>
                    <textarea  />
                </div>
                <button type="submit" className="ui button">
                    Submit
                </button>
            </form>
        </div>

    )
}


export default NewTodo