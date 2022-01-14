import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSettings from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize : 15
    };
  }

  onSetColor = (params) => {
    this.setState({color: params});
  }

  onChangeSizeee = (value) =>{
    if(this.state.fontSize + value >= 9 && this.state.fontSize + value <= 37) {
      this.setState({
        fontSize : this.state.fontSize + value
      });
    }
    //Hoac cach viet dung toan tu 3 ngoi thay cho if
    // this.setState({
    //   fontSize : (this.state.fontSize + value >= 9 && this.state.fontSize + value <= 37) ? this.state.fontSize + value : this.state.fontSize
    // });
  }

  onSettingDefault = (value) => {
    if(value){
      this.setState({
        color : 'red',
        fontSize : 15
      });
    }
  }

  render(){
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker
            color = { this.state.color }
            onReceiveColor={ this.onSetColor }              
          />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSettings
              fontSize={ this.state.fontSize } 
              onChangeSize={this.onChangeSizeee}
            />
            <Reset onResetDefault={ this.onSettingDefault }/>
          </div>
          <Result
            color = { this.state.color }
            fontSize={ this.state.fontSize }              
          />
        </div>
      </div>
    );
  }
}

export default App;
