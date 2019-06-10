import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    Are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
            <Comment 
                avatar={faker.image.avatar()} 
                name='James' time='Today at 6:00PM' 
                comment='Nice Blog Post!' 
            />
            </ApprovalCard>
            <ApprovalCard>
            <Comment 
                avatar={faker.image.avatar()} name='Nael' 
                time='Today at 7:00PM' 
                comment='Great Read' 
            />
            </ApprovalCard>
            <ApprovalCard>
            <Comment 
                avatar={faker.image.avatar()}
                name='Raj' 
                time='Today at 8:00PM' 
                comment='Great Job!' 
            />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))