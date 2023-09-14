const { Triangle, Square, Circle } = require("./shapes");


describe("Triangle", () => {
  test("should generate a svg file with a triangle of the chosen color", () => {
    const Shape = new Triangle();
    let color = ("yellow");
    Shape.setColor(color);
    expect(Shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    );
  });
});

describe("Square", () => {
  test("should generate a svg file with a Square of the chosen color", () => {
    const Shape = new Square();
    let color = ("blue");
    Shape.setColor(color);
    expect(Shape.render()).toEqual(
      `<rect x="50" y="30" width="210" height="150" fill="${color}" />`
    );
  });
});

describe("Circle", () => {
  test("should generate a svg file with a Circle of the chosen color", () => {
    const Shape = new Circle();
    let color = "pink";
    Shape.setColor(color);
    expect(Shape.render()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="${color}" />`
    );
  });
});
