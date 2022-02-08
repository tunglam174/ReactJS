import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      isDisplayForm : false,
      taskEditing: null,
      filter : {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy : 'name',
      sortValue : 1
    }
  }
  componentDidMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  // onGenerateData = () => {
  //   var tasks = [
  //     { 
  //       id : this.generateID(),
  //       name : 'hoc hanh',
  //       status : true
  //     },
  //     { 
  //       id : this.generateID(),
  //       name : 'an uong',
  //       status : false
  //     },
  //     { 
  //       id : this.generateID(),
  //       name : 'ngu',
  //       status : true
  //     }
  //   ];
  //   this.setState({
  //     tasks : tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  // s4(){
  //   return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  // }

  // generateID(){
  //   return this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4()
  // }

  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm,
      taskEditing : null
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    });
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm : true
    });
  }

  onSubmittt = (data) => {
    var { tasks } = this.state;    
    if(data.id === ''){
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var indexEdit = this.findIndex(data.id);
      tasks[indexEdit] = data;
    }
    this.setState({
      tasks : tasks,
      taskEditing : null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var indexStatus = this.findIndex(id);
    if(indexStatus !== -1){
      tasks[indexStatus].status = !tasks[indexStatus].status;    
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1; 
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onDeleteee = (id) => {
    var {tasks} = this.state;
    var indexStatus = this.findIndex(id);
    if(indexStatus !== -1){
      tasks.splice(indexStatus, 1);
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onUpdateee = (id) => {
    var {tasks} = this.state;
    var indexEdit = this.findIndex(id);
    var taskEditing = tasks[indexEdit];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
  }

  onFilterrr = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(), 
        status: filterStatus
      }
    })
  }

  onSearchhh = (keyword) => {
    this.setState({
      keyword : keyword
    });
  }

  onSorttt = (sortBy, sortValue) => {
    this.setState({
      sortBy : sortBy,
      sortValue : sortValue
    })
  }

  render(){
    var {
      tasks,
      isDisplayForm,
      taskEditing,
      filter,
      keyword,
      sortBy,
      sortValue
    } = this.state //var tasks = this.state.tasks
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if(filter.status === -1){
          return task;
        }else{
          return task.status === (filter.status === 1 ? true : false);
        }
      })
    }
    if(keyword){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if(sortBy === 'name') {
      tasks.sort((a,b) => {
        if(a.name > b.name)
        return sortValue; 
        else if(a.name < b.name)
        return -sortValue;
        else return 0;
      })
    }else{
      tasks.sort((a,b) => {
        if(a.status < b.status)
        return sortValue; 
        else if(a.status > b.status)
        return -sortValue;
        else return 0;
      })
    }
    var elmTaskForm = isDisplayForm
      ? <TaskForm onCloseForm={ this.onCloseForm }
      onSubmit={ this.onSubmittt}
      taskEditinggg = { taskEditing }
    /> : "";
    return (      
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1><hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            { elmTaskForm }
          </div>
          <div className= {isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
            : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={ this.onToggleForm }
            >
              <span className="fa fa-plus mr-5"></span>
              Thêm công việc
            </button>
            {/* <button
              className="btn btn-danger ml-5"
              type="button"
              onClick={ this.onGenerateData }
            >
              <span className="fa fa-plus mr-5"></span>
              Generate data
            </button> */}
            <Control
              onSearch = { this.onSearchhh }
              onSort = { this.onSorttt }
              sortBy = { sortBy }
              sortValue = { sortValue }
            />
            <TaskList
              tasks = { tasks }
              onUpdateStatus = { this.onUpdateStatus }
              onDelete = { this.onDeleteee }
              onUpdate = { this.onUpdateee }
              onFilter = { this.onFilterrr}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
