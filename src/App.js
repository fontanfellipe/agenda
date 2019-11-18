import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";





class App extends React.Component{
  state = {
    
  };

  render(){
    
    const columnStyle = {
      border: '1px dotted black'
    }

    return (
      <React.Fragment>
        <MDBRow>
        <MDBCol style={columnStyle} md="9">
          <Event time='10:00' title='Meeting with John' />
          {/* <Event hour='12:00' title='Lunch with amorzinhos'/> */}
        </MDBCol>
        <MDBCol style={columnStyle} md="3"/>
        </MDBRow>
      </React.Fragment>
    )
  }
}

class Event extends React.Component {
  constructor(props){
    super(props);
    this.state={
      time: this.props.time,
      title: this.props.title 
  }
 
  };
  render(){

    const handleChangeTitle = () => this.setState({title: "My new state title"}, console.log(this.state.title))
    const handleChangeTime = () => this.setState({time: '11:00'})

    return (
      <React.Fragment>
        <h3>{this.props.time} - {this.props.title}</h3>
        <button onClick={handleChangeTitle}>Change title</button>
        <button onClick={handleChangeTime}>Change time</button>

      </React.Fragment>
    )
  }
}

export default App;
