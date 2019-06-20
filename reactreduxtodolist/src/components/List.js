import React  from 'react';
import { connect } from 'react-redux'
import { deletingItem } from '../actions'
const List = ({ list, deletingItem }) => {
    console.log(list)




const renderList = () => {
        return list.map(item => {
        return (   
            <div key={item.task} className="item">
                <div className="content">
                    <div className="header">Task: {item.task}</div>
                    <p>Due: {item.duedate}</p>
                    <button onClick={() => deletingItem(item)} className="ui red button small">Remove</button>
                </div>
            </div>
            )
        })
    }

        return (
            <div className="ui massive divided list">
                {renderList()}
            </div>

        )
    
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, { deletingItem})(List);