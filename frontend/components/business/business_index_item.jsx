import React from 'react';

const BusinessIndexItem = (props) => (
  <div className="business-index-container">
    <div className="business-index">
      <div className="business-index-photo">
        <img src={`${props.business.photos}`} alt="" />
      </div>
      <div className="business-index-info">
        <div className="business-index-info-left">
        <div>
          {props.business.businessName}
          </div>
          <div>
          {props.business.rating}
        </div>
          <div>
            {props.business.businessInfo}
          </div>
        </div>
          <div className="business-index-info-right">
            <div>
              {props.business.phoneNumber}
            </div>
            <div>
              {props.business.address1}
            </div>
          </div>
      </div>
    </div>
  </div>
)


export default BusinessIndexItem;