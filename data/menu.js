let menuItems = [];
let idCounter = 1;

function addMenuItem({ name, price, category }) {
  menuItems.push({ id: idCounter++, name, price, category });
}

function getMenuItems() {
  return menuItems;
}

function isMenuItemExists(id) {
  return menuItems.some(item => item.id === id);
}

module.exports = { addMenuItem, getMenuItems, isMenuItemExists };
