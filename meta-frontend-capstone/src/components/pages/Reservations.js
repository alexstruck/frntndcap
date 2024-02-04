import React from 'react';
import "../css/Reservations.css";
import Form from '../Form';
import Footer from '../Footer';
import Header from '../Header';

function Reservations() {

  return (
    <>
    <Header></Header>
    <div className="res-content-wrapper">
          <div className="res-content-container">
              <div className="form">
                  <h1>Reserve a Table</h1>
                  <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                  <Form />
              </div>
          </div>
      </div><Footer></Footer></>
  )
}

export default Reservations