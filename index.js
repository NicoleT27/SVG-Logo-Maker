const inquirer = require("inquirer");
const shapes = require("./lib/shapes");

const logoSpecs = [
  {
    type: "input",
    name: "text",
    message:
      "Please enter up to three characters you would like for your logo.",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter a color keyword (OR a hexadecimal number)that you would like the text to be in.",
  },
  {
    type: "list",
    name: "shape",
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

function createLogo() {
  inquirer
    .prompt(logoSpecs)
    .then((data) => {
        //  if (err) {
           return console.log(
             "Success, Your generated logo.svg file is ready!"
           );
    })
    .catch((error) => {
        return console.log("Unable to generate logo, please try again");
    });
}
createLogo();
