class App extends React.Component {
  state={
    events: [
      {id: 1, time: '09:15', title: 'Daily Walmart', location:'Lobby'},
      {id: 2, time: '11:00', title: '3D Model meeting', description:'Weekly overview about 3D model sector'},
      {id: 3, time: '13:15', title: 'QA Model meeting', description:'Weekly overview about QA sector', location:'Floripa Room'}
    ]
  }

  handleDelete = eventId => {
    const filteredEvents = this.state.events.filter(event => event.id !== eventId);
    //this.setState({ events });
  };



  render(){

    const dueForTheDay = this.state.events.map(function(event){
      return (
        <Events 
        time={event.time}
        title={event.title}
        description={event.description}
        location={event.location}
        key={event.id}
        onDelete={handleDelete}
      />
    )})

    return(
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9" className="mb-r">
              <h2 className="text-uppercase my-3">Today</h2>
              <div id="schedule-items">
                {dueForTheDay}
              </div>
              <MDBRow className="md-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded>
                    Add Event
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
              <h3 className="text-uppercase my-3">schedule</h3>
              <h6 className="my-3">You have <b>{this.state.events.length} events</b> today</h6>
              <h1>
                <MDBRow>
                  <MDBCol xs="3" className="text-center mr-3">
                    <MDBIcon icon="sun" fixed/>
                  </MDBCol>
                  <MDBCol xs="9">
                    Sunny
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs="3" className="text-center" >
                    <MDBIcon icon="thermometer-three-quarters" fixed className="my-4"/>
                  </MDBCol>
                  <MDBCol xs="9" className="my-4">23 C</MDBCol>
                </MDBRow>
              </h1>
              <p className="mr-5">
              Don't forget your sunglasses. Today will dry and sunny, becoming
              warm in the afternoon with temperatures of between 20 and 25
              degrees.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment> 
    )
  }
}
 
const Events = function(props){
  return(
    <React.Fragment>
      <div className="media mt-2">
          <h3 className="h3-responsive font-weight-bold mr-3">
            {this.props.time} 
          </h3>
          <div className="media-body mb-3 mb-lg-3">
            <MDBBadge onClick={() => this.props.onDelete(this.props.id)} color="danger" className="ml-2 float-right">
                -
            </MDBBadge>
            <h6 className="mt-0 font-weight-bold">- {this.props.title}</h6>
            <hr className="hr-bold my-2" />
            {this.props.location && <h6 className="font-smaller mb-0"><MDBIcon icon="location-arrow" /> {this.props.location}</h6>}
          </div>
        </div>
          {this.props.description && <h6 className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">{this.props.description}</h6>}
    </React.Fragment>
  )
}