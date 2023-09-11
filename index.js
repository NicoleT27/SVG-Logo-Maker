const inquirer = require("inquirer");
const {Triangle, Square, Circle} = require("./lib/shapes.js");
const fs = require("fs");
const SVG = require("./lib/svg.js");


// Array of questions with inquirer
const logoSpecs = [
  {
    type: "input",
    name: "text",
    message:
      "Please enter up to three characters you would like for your logo.",
    //   The validate function from inquirer makes sure that if the user tries to move on without entering or
    // tries to do more than 3 characters they will recieve an error 
    validate: function(input) {
      if (input.length > 3) {
        return "Please try again, must enter only up to 3 characters";
      } else if (input.length === 0) {
        return "Please try again, must enter up to 3 characters";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter a color keyword (OR a hexadecimal number)that you would like the text to be in.",
  },
  {
    type: "list",
    name: "logoShape",
    message: "Please select a shape for the logo.",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter a color keyword (OR a hexadecimal number) for the shape chosen.",
  },
];

class Svg {
    constructor(){
        this.text = "";
        this.shape = "";
    }
    render() {
        return `${this.text}${this.shape}`;
    }

    setText(text,color){
        this.text = text.render();
    }
    setShape(shape){
        this.shape = shape.render();
    }
}
// This function will make sure the user either recieves a success message for when they have collected all of the required data
// or recieve a error message should they not be able to generate their logo
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log("Unable to generate logo, please try again");
    } else {
      console.log("Success, your generated logo.svg file is ready!");
    }
  });
}
// This section grabs the results of the questions and uses a javascript switch statment to say if the user enters
// any of the shapes below that it will create a new instance of that shape for the logo.svg file
inquirer.prompt(logoSpecs).then((results) => {
  const { text, textColor, logoShape, shapeColor } = results;
 let shape;

  switch (logoShape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    case "Circle":
      shape = new Circle();
      break;
    default:
      throw new Error("Invalid logo shape");
  }

  shape.setColor(shapeColor);

  const data = {
    text:text,
    color:textColor,
    shape: shape
  };


   const svgInstance = new Svg(data);
   const svgData = svgInstance.render();
// The writeToFile will allow the data collected to be sent to the logo.svg file that is created once successfull
// 
   writeToFile("logo.svg", svgData);
});


