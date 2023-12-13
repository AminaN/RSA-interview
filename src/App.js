import React, { useState } from 'react';
import AddonList from './components/addons';
import Quote from './components/details';
import { addAddon, removeAddon } from './services/addonService';
import './styles/app.css';
import data from './db.json';

const App = () => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleAddAddon = (addon) => {
    setSelectedAddons((prevAddons) => addAddon(prevAddons, addon));
  };

  const handleRemoveAddon = (addon) => {
    setSelectedAddons((prevAddons) => removeAddon(prevAddons, addon));
  };

  return (
    <div>
      <div className="app-name"><h1>HOME INSURANCE</h1></div>
       <Quote quote={data.quote} selectedAddons={selectedAddons} />
      <AddonList addons={data.addons} onAdd={handleAddAddon} onRemove={handleRemoveAddon} selectedAddons={selectedAddons}  />

    </div>
  );
};

export default App;