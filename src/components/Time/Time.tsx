import React, { Component } from 'react';
import './Time.scss';
import { IBooking } from '../Booking/Booking';

export interface IAddTimeProps{
    theBooking: IBooking;
    onclick(updatedBooking: IBooking): void,
}

class Time extends React.Component <IAddTimeProps,{}> {
    constructor(props:any){
        super(props);
        
        this.handleInput = this.handleInput.bind(this);
        this.handleView = this.handleView.bind(this);
    }

    handleInput = (event: any) => { 
        let booking = this.props.theBooking;
        booking.time = event.target.value;
        booking.view = this.props.theBooking.view + 1;

        this.props.onclick(booking);
    }

    handleView = (event: any) => {
      let booking = this.props.theBooking;
      booking.view = parseInt(event.target.value);

      this.props.onclick(booking);
    }

    render() {

      if(this.props.theBooking.time){
        return (
          <main className="timePageContainer">
              <section className="timeParentTopSection">
                  <div className="timeChildTopSection">
                          <button className="timeTopSection" onClick={this.handleView} value="1">Guests</button>
                          <button className="timeTopSection">{this.props.theBooking.guests}</button>
                      </div>

                  {/* Open for date when ready - change all values!!!! */}
                  {/* <div className="timeChildTopSection">
                    <button className="timeTopSection" onClick={this.handleView} value="2">Date</button>
                        <button className="timeTopSection">{this.props.theBooking.date}</button>
                  </div> */}

                  <div className="timeChildTopSection">
                    <button className="timeTopSection" onClick={this.handleView} value="2">Time</button>
                      <button className="timeTopSection">{this.props.theBooking.time}</button>
                  </div>

                      
              </section>
              <div className="timeParent">
              <h1>Select time</h1>
              <section className="timeChild">
                  <button onClick={this.handleInput} className="timebox" value="18:00">18:00</button>
                  <button onClick={this.handleInput} className="timebox" value="21:00">21:00</button> 
              </section>
              </div>
          </main>
        )
      }else{
        return (
          <main className="timePageContainer">
              <section className="timeParentTopSection">
                  <div className="timeChildTopSection">
                          <button className="timeTopSection" onClick={this.handleInput} value="1">Guests</button>
                          <button className="timeTopSection">{this.props.theBooking.guests}</button>
                      </div>

                      {/* Open for date when ready - change all values!!!! */}
                      {/* <div className="timeChildTopSection">
                      <button className="timeTopSection" onClick={this.handleInput} value="2">Date</button>
                          <button className="timeTopSection">{this.props.theBooking.date}</button>
                      </div> */}

                     
              </section>
              <div className="timeParent">
              <h1>Select time</h1>
              <section className="timeChild">
                  <button onClick={this.handleInput} className="timebox" value="18:00">18:00</button>
                  <button onClick={this.handleInput} className="timebox" value="21:00">21:00</button> 
              </section>
              </div>
          </main>
        )
      } 
    }
}
export default Time;