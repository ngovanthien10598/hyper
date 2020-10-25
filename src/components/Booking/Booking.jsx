import React, { useState } from 'react';

import './Booking.scss';

const Booking = props => {
  const [step, setStep] = useState(1);

  const pickVehicle = (
    <>
      <div className="title">Chọn loại xe</div>
      <div className="content">
        <div className="radio-wrapper">
          <label className="radio-label">
            <input type="radio" name="vehicle" id="" />
            <span>Gắn máy</span>
          </label>
          <label className="radio-label">
            <input type="radio" name="vehicle" id="" />
            <span>Ô tô</span>
          </label>
          <label className="radio-label">
            <input type="radio" name="vehicle" id="" />
            <span>Ô tô tải</span>
          </label>
        </div>
      </div>
    </>
  );

  const pickLocations = (
    <>
      <div className="title">Chọn địa điểm</div>
      <div className="content">
        <div className="location-wrapper">
          <div className="label">Xuất phát từ</div>
          <button className="btn btn-next" onClick={props.onStartClick}>Chọn</button>
        </div>
        <div className="location-wrapper">
          <div className="label">Đến</div>
          <button className="btn btn-next" onClick={props.onEndClick}>Chọn</button>
        </div>
      </div>
    </>
  )

  const enterInfo = (
    <>
      <div className="title">Nhập thông tin</div>
      <div className="content">
        <div className="form-group">
          <label htmlFor="name">Họ và tên</label>
          <input type="text" className="input-text" name="" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Điện thoại</label>
          <input type="text" className="input-text" name="" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="vehicle-name">Tên xe</label>
          <input type="text" className="input-text" name="" id="vehicle-name" />
        </div>
        <div className="form-group">
          <label htmlFor="vehicle-type">Loại xe</label>
          <input type="text" className="input-text" name="" id="vehicle-type" />
        </div>
        <div className="form-group">
          <label htmlFor="load">Trọng tải</label>
          <input type="text" className="input-text" name="" id="load" />
        </div>
        <div className="form-group">
          <label htmlFor="note">Lưu ý</label>
          <textarea rows="3" className="input-text" name="" id="note"></textarea>
        </div>
      </div>
    </>
  );

  function renderContent() {
    switch (step) {
      case 1:
        return pickVehicle;
      case 2:
        return pickLocations;
      case 3:
        return enterInfo;
      default:
        return <div></div>
    }
  }

  function onStartClick() {

  }

  function onEndClick() {

  }

  function handleCancleClick() {
    setTimeout(() => {
      setStep(1);
    }, 500);
    props.onCancleClick();

  }

  function handlePrevClick() {
    setStep(prevStep => prevStep - 1);
  }

  function handleNextClick() {
    setStep(prevStep => prevStep + 1);
  }

  function handleFinishClick() {

  }

  return (
    <div className={`booking${props.visible ? ' visible' : ''}`}>
      {renderContent()}
      <div className="footer">
        <button className="btn btn-cancel" onClick={handleCancleClick}>Hủy bỏ</button>

        {
          step > 1 &&
          <button className="btn" onClick={handlePrevClick}>Trở về</button>
        }

        {
          step < 3 &&
          <button className="btn btn-next" onClick={handleNextClick}>Tiếp theo</button>
        }

        {
          step === 3 &&
          <button className="btn btn-finish" onClick={handleFinishClick}>Hoàn tất</button>
        }
      </div>
    </div>
  )
}

export default Booking;