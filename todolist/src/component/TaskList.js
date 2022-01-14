import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render(){
    var { tasks } = this.props;
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={ task.id } index={ index } task={ task }/>
    })
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover mt-15">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng thái</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                  />
                </td>
                <td>
                  <select
                    type="text"
                    className="form-control"
                    name="filterStatus"
                  >
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              { elmTasks }
            </tbody>
          </table>
        </div>
      </div>        
    );
  }
}
export default TaskList;
