import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
class App extends React.Component {

  const toDo = []



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


  render() {
    return (
      <div className="App">
        <h2>Todo List: MVP</h2>
        <TodoList toggleTask={this.toggleTask} toDo={this.state.toDo} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
