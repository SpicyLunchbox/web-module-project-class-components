import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDo = []
class App extends React.Component {

 



  constructor() {
    super();
    this.state = {
      toDo: toDo,
    }
  }
 
  toggleTask = (clickedOnTask) => {
    this.setState({
      toDo: this.state.toDo.map((task) => {
        if (task.id === clickedOnTask) {
          return {
            ...task,
            completed: !task.completed,
          }
        } else {
          return task;
        }
      })
    })
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      toDo: [...this.state.toDo, newTask]
    })
  }

  removeCompleted = () => {
    this.setState({
         toDo : this.state.toDo.filter(task => {
             return task.completed != true;
         })
    })
 }

  render() {
    return (
      <div className="App">
        <h2>Todo List: MVP</h2>
        <TodoList toggleTask={this.toggleTask} toDo={this.state.toDo} />
        <TodoForm addTask={this.addTask} toDo={this.state.toDo} removeCompleted={this.removeCompleted}/>
      </div>
    );
  }
}

export default App;
