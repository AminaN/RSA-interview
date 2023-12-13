import React, { useState }  from 'react';
import '../styles/details.css';

const Details = ({ quote, selectedAddons }) => {
  const [isAnnual, setIsAnnual] = useState(false);

 // calculates the total price including addons based on if its annual or monthly
  const calculateTotalPrice = () => {
    const addonPrices = selectedAddons.reduce(
      (total, addon) => total + (isAnnual ? addon.annualPrice : addon.monthlyPrice),
      0
    );

    return isAnnual ? quote[0].annualPrice + addonPrices : quote[0].monthlyPrice + addonPrices;
  };
// handles switch between monthly and annually
  const handleSwitch = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
<div className="details-container">
      <div className="details-content">
        <h2>Hey {quote[0].firstName}</h2>
        <p>Here is your quote for {quote[0].address1}, {quote[0].address2}</p>
        <p>Quote Reference: {quote[0].quoteRef}</p>
        <p>Cover starts on {new Date(quote[0].startDate).toLocaleDateString()}</p>
        <p>Selected Addons:</p>
        <ul>
          {selectedAddons.map((addon) => (
            <li key={addon.title}>
              {addon.title} - £{addon.monthlyPrice.toFixed(2)} / month
            </li>
          ))}
        </ul>
      </div>
      <div className="details-price">
        <div className="price-center">
        <h1>£{calculateTotalPrice().toFixed(2)}</h1>
        <p>{isAnnual ? 'Per Year' : 'Per Month'}</p>
        <button onClick={handleSwitch} aria-label={`Switch to ${isAnnual ? 'Monthly' : 'Annual'}`}>
        Switch to {isAnnual ? 'Monthly' : 'Annual'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Details;