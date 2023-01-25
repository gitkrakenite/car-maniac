import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricingPlan">
      <h1>Choose Your Prefered Membership</h1>
      <div className="pricingWrapper">
        <div className="pricingItem">
          <h4>Bronze Membership</h4>
          <p>Amazing Deals</p>
          <span>Ksh.100 per month</span>
          <p>Be the first one to know when a rental is free</p>
          <button>Subscribe</button>
        </div>
        <div className="pricingItem">
          <h4>Silver Membership</h4>
          <p>Amazing Deals</p>
          <p>Be the first one to know when a rental is free</p>
          <span>Ksh.200 per month</span>
          <p>No Ads</p>
          <button>Subscribe</button>
        </div>
        <div className="pricingItem">
          <h4>Gold Membership</h4>
          <p>Amazing Deals</p>
          <p>Be the first one to know when a rental is free</p>
          <p>No Ads</p>
          <span>Ksh.200 per month</span>
          <p>Free rides</p>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
