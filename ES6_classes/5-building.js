class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;

class TestBuilding extends Building {}

test('building forces override', () => {
  expect(() => {
    new TestBuilding(200).evacuationWarningMessage();
  }).toThrow('Class extending Building must override evacuationWarningMessage');
});
