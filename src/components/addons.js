import '../styles/addon.css';
import { isAddonSelected } from '../services/addonService';
import React from 'react';

const Addon = ({ addons, onAdd, onRemove, selectedAddons}) => {
  return (
    <div>
      <div className="addon-title"><h2>Tailor Your Cover with Optional Extras</h2></div>
      <ul className="addon-list">
        {addons.map((addon) => (
          <li key={addon.title}  className="addon-item">
           <div className="addon-info-container">
           <div><h2> {addon.title} </h2> </div>
            <div><p> £{addon.monthlyPrice.toFixed(2)} / month </p></div>
            </div>
            <p>{addon.text}</p>
            <div className="addon-info-button" >
             {isAddonSelected(selectedAddons,addon) ? (
                <button onClick={() => onRemove(addon)} aria-label={`Remove ${addon.title} Extra`}>Remove Extra</button>
                ) : (
                <button onClick={() => onAdd(addon)}  aria-label={`Add ${addon.title} Extra`}>Add Extra</button>
               )}
               </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addon;