import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {   MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { func } from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      events : [
        {id: 1, time: '09:15', title: 'Daily Walmart', location:'Lobby'},
        {id: 2, time: '11:00', title: '3D Model meeting', description:'Weekly overview about 3D model sector', location:'LA Room'},
        {id: 3, time: '13:15', title: 'QA Model meeting', description:'Weekly overview about QA sector', location:'Floripa Room'}
      ],
      modal: false
  }

  this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };

  toggleModal = () => this.setState({modal: !this.state.modal})

  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
    
  }

  addEvent = () => {
    var newArray = [...this.state.events];
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5"
    });
    this.setState({ events: newArray });
    this.setState({
      time: "",
      title: "",
      location: "",
      description: ""
    });
  };

  render(){

  return(
    <React.Fragment>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="9">
          {this.state.events.map(event =>
          <Event
            key ={event.id}
            id={event.id}
            time={event.time}
            title={event.title}
            location={event.location}
            description={event.description}
            onDelete={this.handleDelete}
          />
            )}
          <MDBRow className="md-4">
            <MDBCol xl="3" md="6" className="mx-auto text-center" md="9">
              <MDBBtn color="info" onClick={this.toggleModal}>Add Event</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol>
          <h6>Nothing here yet</h6>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>

    <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
      <MDBModalHeader
        className="text-center"
        titleClass="w-100 font-weight-bold"
        toggle={this.toggleModal}
      >
        Add new Event
      </MDBModalHeader>
      <MDBModalBody>
      <form className="mx-3 grey-text">
        <MDBInput
          name="time"
          label="Time"
          icon="clock"
          hint="12:30"
          group
          type="text"
          getValue={this.handleInputChange("time")}
        />
        <MDBInput
          name="title"
          label="Title"
          icon="edit"
          hint="Briefing"
          group
          type="text"
          getValue={this.handleInputChange("title")}
        />
        <MDBInput
          name="location"
          label="Location (optional)"
          icon="map"
          group
          type="text"
          getValue={this.handleInputChange("location")}
        />
        <MDBInput
          name="description"
          label="Description (optional)"
          icon="sticky-note"
          group
          type="textarea"
          getValue={this.handleInputChange("description")}
        />
      </form>
      </MDBModalBody>
      <MDBModalFooter className="justify-content-center">
        <MDBBtn
          color="info"
          onClick={() => {
            this.toggleModal();
            this.addEvent();
          }}
        >
          Add
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </React.Fragment>
  )
  }
}

class Event extends React.Component {
  render(){
    return(
    <React.Fragment>
    <div className="media mt-2">
      <h3 className="h3-responsive font-weight-bold mr-3">{this.props.time}</h3>
      <div key={this.props.id}  className="media-body mb-3 mb-lg-3">
        <MDBBadge onClick={() => this.props.onDelete(this.props.id)} color="danger" className="ml-2 float-right">
          -
        </MDBBadge>
        <h3 key={this.props.id}>{this.props.title}</h3>
        <hr/>
    {this.props.description && <h6>{this.props.location}</h6> }
      </div>
    </div>
    {this.props.description && <h6 className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">{this.props.description}</h6>}
    </React.Fragment>
    )
  }
}



export default App;
