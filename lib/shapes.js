class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color){
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
