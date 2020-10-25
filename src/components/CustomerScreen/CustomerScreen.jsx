import Screen from 'components/Screen/Screen';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './CustomerScreen.scss';
import Booking from 'components/Booking/Booking';

const CustomerScreen = props => {
  const [bookingVisible, setBookingVisible] = useState(false);
  const [isStartSelected, setStartSelected] = useState(false);
  const [isEndSelected, setEndSelected] = useState(false);

  function handleAddClick() {
    setBookingVisible(true);
  }

  function handleCancleClick() {
    setBookingVisible(false);
  }

  function handleStartClick() {
    setStartSelected(true);
  }

  function handleEndClick() {
    setEndSelected(true);
  }

  return (
    <Screen className="cus-screen">
      <img className="map" src="/images/map.svg" alt=""/>

      {
        isStartSelected &&
        <img src="/images/marker.svg" alt="" className="marker start"/>
      }
      
      {
        isEndSelected &&
        <img src="/images/marker.svg" alt="" className="marker end"/>
      }

      <Booking
        visible={bookingVisible}
        onStartClick={handleStartClick}
        onEndClick={handleEndClick}
        onCancleClick={handleCancleClick} />

      <button className="add-btn" onClick={handleAddClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </Screen>
  )
}

export default CustomerScreen;