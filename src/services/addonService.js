import React from 'react';

// adding an extra
const addAddon = (selectedAddons, addon) => {
  return [...selectedAddons, addon];
};

// removing extra
const removeAddon = (selectedAddons, addon) => {
  return selectedAddons.filter((selectedAddon) => selectedAddon.title !== addon.title);
};

// checks if it has been selected
const isAddonSelected = (selectedAddons, addon) => {
  return selectedAddons.some((selectedAddon) => selectedAddon.title === addon.title);
};

export { addAddon, removeAddon, isAddonSelected };