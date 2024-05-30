import Building from './4-building.js';

export default class Tower extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw TypeError('floors must be a number');
    }
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `You need to evacuate the ${this._floors} floors building in case of emergency.`;
  }
}
