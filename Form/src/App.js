import React, { Component } from 'react';
import './App.css';
// import ColorPicker from './component/ColorPicker';
// import SizeSettings from './component/SizeSetting';
// import Reset from './component/Reset';
// import Result from './component/Result';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtPassword: '',
      txtDesc: '',
      txtGender: 1,
      txtLang: 'vi',
      txtCheckbox: false
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value; 
    this.setState({
      [name] : value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return (      
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Form
                </h3>
              </div>
              <div className="panel-body">
                <form onSubmit={ this.onHandleSubmit } >
                  <div className="form-group">
                    <label>Usename: </label>
                    <input                      
                      type="text"
                      className="form-control"
                      name="txtName"
                      onChange={ this.onHandleChange }
                      value={ this.state.txtName }                
                    />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input                      
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      onChange={ this.onHandleChange }
                      value={ this.state.txtPassword }                     
                    />
                  </div>
                  <div className="form-group">
                    <label>Description: </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="txtDesc"
                      onChange={ this.onHandleChange }
                      value={ this.state.txtDesc }
                    >

                    </textarea>
                  </div>
                  <label>Gender: </label>
                  <select
                    className="form-control"
                    name="txtGender"
                    value={ this.state.txtGender }
                    onChange={ this.onHandleChange }
                  >
                    <option value={0}>Woman</option>
                    <option value={1}>Man</option>
                  </select><br/>
                  <label>Languages: </label>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="txtLang"
                        value="vi"
                        onChange={ this.onHandleChange }
                        checked={this.state.txtLang === "vi"}
                      />
                      Vietnamese
                    </label><br/>
                    <label>
                      <input
                        type="radio"
                        name="txtLang"
                        value="en"
                        onChange={ this.onHandleChange }
                        checked={this.state.txtLang === "en"}
                      />
                      English
                    </label><br/>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="txtCheckbox"
                        value={true}
                        onChange={ this.onHandleChange }
                      />
                      Accept 
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save
                  </button>&nbsp;
                  <button
                    type="reset"
                    className="btn btn-default"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default App;
