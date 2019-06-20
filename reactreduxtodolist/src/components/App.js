import React, {Component} from 'react';
import List from './List'
import Form from'./Form'

class App extends Component {

    state = {
        showForm: false
    }

    //Return new state object explicitly if using prevState
    toggleForm = () => {
        this.setState((prevState) => {
            return { showForm: !prevState.showForm }
        })
    }

    

    render() {
        console.log(this.state.showForm)
        return (
            <div>
                <button onClick={this.toggleForm}  className="ui primary button">Add Item to List</button>
                {this.state.showForm ? <Form /> : null}
                <List />
            </div>
        ) 
    }
}

export default App;