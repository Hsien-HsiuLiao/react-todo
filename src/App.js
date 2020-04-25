import React, {Component} from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Clean bathroom',
        completed: false
      },
      {
        id: 3,
        title: 'Clean kitchen',
        completed: false
      }

    ]
  }

  //toggle complete
  markComplete = (id) => {
    
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
}

  render() {
    

    return (
    
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
