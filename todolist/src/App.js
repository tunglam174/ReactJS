import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks : []
    }
  }
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  onGenerateData = () => {
    var tasks = [
      { 
        id : this.generateID(),
        name : 'hoc hanh',
        status : true
      },
      { 
        id : this.generateID(),
        name : 'an uong',
        status : false
      },
      { 
        id : this.generateID(),
        name : 'ngu',
        status : true
      }
    ];
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4()
  }

  render(){
    var { tasks } = this.state //var tasks = this.state.tasks
    return (      
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1><hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button className="btn btn-primary" type="button">
              <span className="fa fa-plus mr-5"></span>
              Thêm công việc
            </button>
            <button
              className="btn btn-danger ml-5"
              type="button"
              onClick={ this.onGenerateData }
            >
              <span className="fa fa-plus mr-5"></span>
              Generate data
            </button>
            <Control />
            <TaskList tasks = { tasks }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
