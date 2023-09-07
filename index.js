// import inquirer from "inquirer";
const inquirer = require("inquirer");

const logoSpecs = [
  {
    type: "input",
    name: "letters",
    message: "Please enter up to three characters you would like for your logo.",
  },
  {
    type: "input",
    name: "color",
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
    name: "color",
    message:
      "Please enter a color keyword (OR a hexadecimal number) for the shape chosen.",
  },
];

function createLogo() {
  inquirer.prompt(logoSpecs).then((data) => {
    console.log("Generated logo.svg");
  });
}

createLogo();
