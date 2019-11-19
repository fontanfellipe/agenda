import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";




class App extends React.Component {

state = {
  events: [
    {id: 1, time: '07:00', title: 'Running with amorzinhos'},
    {id: 2, time: '08:40', title: 'Gonna work'},
    {id: 3, time: '11:00', title: '3D weekly meeting'},
    {id: 4, time: '12:00', title: 'lunch with amorzinhos'},
    {id: 5, time: '13:15', title: 'QA weekly meeting'}
  ]
}

  render(){
    const columnStyle = {
      border: '1px dotted black'
    }

    const mappingTest = this.state.events.map((event) => 
      <Events key={event.id} time={event.time} title={event.title} />)

    return (
    <React.Fragment>
      <MDBRow >
        <MDBCol style={columnStyle} md='9' md='9'>
          {mappingTest}
        </MDBCol>
        <MDBCol style={columnStyle} md='9' md='3'></MDBCol>
      </MDBRow>
    </React.Fragment>
    )
  }
}

class Events extends React.Component {
  state={
    time: this.props.time,
    title: this.props.title
  }

  render(){

    return(
    <React.Fragment>
      <h3>{this.props.time} - {this.props.title}</h3>

    </React.Fragment>
    )
  }
}

export default App;
