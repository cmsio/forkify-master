import uniqid from "uniqid";

export default class List {
  constructor() {
    this.items = [];
  }

  // add shopping list button
  addItems(count, unit, ingredient) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ingredient
    };
    this.items.push(item);
    return item;
  }

  // remove the particular item
  deleteItem(id) {
    const index = this.items.findIndex(el => el.id === id);
    this.items.splice(index, 1);
  }

  // update number of items in my shopping list
  updateItems(id, newCount) {
    // loop through all elements in the items, and select the one
    // that has the ID equal to the ID that we pass into the function
    this.items.find(el => el.id === id).count = newCount;
  }
}