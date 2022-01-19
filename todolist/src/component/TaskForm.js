import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id : '',
      name: '',
      status: false
    }
  }

  componentDidMount() {
    if(this.props.taskEditinggg){
      this.setState({ 
        id : this.props.taskEditinggg.id,
        name : this.props.taskEditinggg.name,
        status : this.props.taskEditinggg.status
      })
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value ? true : false;
    }
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
    this.props.onCloseForm();
  }

  render(){

    var { id } = this.state;

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
            <span
              className="fa fa-times-circle text-right"
              onClick={ this.onCloseForm }
            >              
            </span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Tên: </label>
              <input
                type='text'
                className="form-control"
                name="name"
                value={ this.state.name }
                onChange={ this.onChange}
              />
            </div>
            <label>Trạng thái: </label>
            <select
              className="form-control"
              name="status"
              value={ this.state.status }
              onChange={ this.onChange}
            >
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </select><br/>
            <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-warning"
                >
                  <span className="fa fa-plus mr-5"></span>Lưu Lại
                </button>&nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={ this.onClear }
                >
                  <span className="fa fa-close mr-5"
                  ></span>Hủy Bỏ
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskForm;
