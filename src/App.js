import React from 'react';
// import ReactDOM from 'react-dom';
import ToDoNow from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {taskToDo: 'Component Code Fu',
        id: 1323817077286,
        completed: false
      },
        {taskToDo: 'Sand The Floor',
        id: 1528817687286,
        completed: false
      },
        {taskToDo: 'Paint The Fence',
        id: 1428817077286,
        completed: false
      },  
        {taskToDo: 'Type In The Form To Add New Task',
        id: 1522818057286,
        completed: false
      },
        {taskToDo: 'Click One Of Me To Complete Task',
        id: 1598817077186,
        completed: false
      },
      ],
      newTask: '',
      newId: Math.floor((Math.random() * 1000000000000) + 1000000000000),
      newCompleted: false,
      newDeleted: true,
      textDecoration: 'line-through',
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  changeStyle = id => {
    
    // event.target.classList.toggle("toggle-decoration");
    // this.setState({ completed: !this.state.completed });

    this.setState({ 
      toDoList: this.state.toDoList.map((item, idx)=>{
        if (id !== idx){
          return item;
        } else {
          return {
            ...item,
            completed: !item.completed
          };
        }
      })
     });
  };

  clearTask = event => {
    console.log(event.target.name);
    let targeted = document.getElementsByClassName('toggle-decoration');
    console.log(targeted);
    while(targeted.length > 0){
      targeted[0].parentNode.removeChild(targeted[0]);

  }
  // this.setState({ [event.target.completed]: event.target.value });
  // event.preventDefault();
  // this.setState({
   
  // })
  };

  filterCharacter = () => {
   
        this.setState({
          toDoList: this.state.toDoList.filter((item) => !item.completed )
        })
      }


           
            
          
        
      

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { taskToDo: this.state.newTask,
           id: this.state.newId,
            completed: this.state.newCompleted},

      ],
      newTask: '',
      newId: Math.floor((Math.random() * 1000000000000) + 1000000000000),
      newCompleted: false,
    })
    
  }

  render() {
    console.log(this.state.toDoList);
    return (
      <div className = "master-div">
        <h2>Todo List: MVP</h2>
        <ToDoNow 
        changeStyle={this.changeStyle}
        addNewTask={this.addNewTask}
        ToDoing={this.state.toDoList}
        changeHandler={this.changeHandler}
        newTask={this.state.newTask}
        clearTask={this.clearTask}
        newId={this.newId}
        newCompleted={this.newCompleted}
        newDeleted={this.newDeleted}
        filterCharacter={this.filterCharacter}
        />
      </div>
    );
  }
}

export default App;
