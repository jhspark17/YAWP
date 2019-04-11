import React from 'react';
import { Link } from 'react-router-dom';


const FakeInformation = () => {
  
  return (
    <div className="fake-information-container">
      <div className="hours">
        <h1>Hours</h1>
        <div>
          {" "}
          <span>Mon:</span> 9:00 AM - 10:00 PM{" "}
        </div>
        <div>
          {" "}
          <span>Tues:</span> 9:00 AM - 10:00 PM{" "}
        </div>
        <div>
          {" "}
          <span>Wed:</span> 9:00 AM - 10:00 PM{" "}
        </div>
        <div>
          {" "}
          <span>Thurs:</span> 9:00 AM - 10:00 PM{" "}
        </div>
        <div>
          {" "}
          <span>Fri:</span> 9:00 AM - 10:00 PM{" "}
        </div>
        <div>
          {" "}
          <span>Sat:</span> 9:00 AM - 10:00 PM{" "}
        </div>
        <div>
          {" "}
          <span>Sun:</span> 9:00 AM - 10:00 PM
        </div>
      </div>
      <div className="more-business-information">
        <h1>More business info</h1>
        <div>
          Take Reservations <span>Yes</span>
        </div>
        <div>
          Take-Out <span>Yes</span>
        </div>
        <div>
          Accepts Credit Cards <span>Yes</span>
        </div>
        <div>
          Accepts Apple Pay <span>No</span>
        </div>
        <div>
          Accepts Google Pay <span>No</span>
        </div>
        <div>
          Good for <span>Brunch, Lunch, Dinner</span>
        </div>
        <div>
          Parking <span>Garage, Street</span>
        </div>
        <div>
          Bike Parking <span>No</span>
        </div>
        <div>
          Wheelchair Acessible <span>Yes</span>
        </div>
        <div>
          Good for Kids <span>No</span>
        </div>
        <div>
          Good for Groups <span>Yes</span>
        </div>
        <div>
          Attire <span>Casual</span>
        </div>
        <div>
          Ambience <span>Casual, Trendy, Classy</span>
        </div>
        <div>
          Noise Level <span>Average</span>
        </div>
        <div>
          Good for Dancing <span>No</span>
        </div>
        <div>
          Alcohol <span>Full Bar</span>
        </div>
        <div>
          Good for Happy Hour <span>Yes</span>
        </div>
        <div>
          Best Nights <span>Thu, Fri, Sat</span>
        </div>
        <div>
          Coat Check <span>Yes</span>
        </div>
        <div>
          Smoking <span>No</span>
        </div>
        <div>
          Outdoor Seating <span>Yes</span>
        </div>
        <div>
          WiFi <span>Free</span>
        </div>
        <div>
          Has TV <span>Yes</span>
        </div>
        <div>
          Waiter Service <span>Yes</span>
        </div>
        <div>
          Caters <span>Yes</span>
        </div>
        <div>
          Has Pool Table <span>No</span>
        </div>
      </div>
    </div>
  );

}


export default FakeInformation