const carSymbol = Symbol('carData');

export default class Car {
  constructor(brand, motor, color) {
    this[carSymbol] = {
      brand,
      motor,
      color,
    };
  }

  get brand() {
    return this[carSymbol].brand;
  }

  get motor() {
    return this[carSymbol].motor;
  }

  get color() {
    return this[carSymbol].color;
  }

  cloneCar() {
    const { brand, motor, color } = this[carSymbol];
    return new Car(brand, motor, color);
  }
}
