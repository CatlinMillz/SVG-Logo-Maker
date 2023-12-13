const inquirer = require('inquirer');
const fs = require("fs")
const {
    SVG,
    Text,
    Circle,
    Triangle,
    Square
} = require("./lib/shapes")

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters: '
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Enter text color (keyword or hex): '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape: ',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter shape color (keyword or hex): '
    }
])
.then(({text, text_color, shape, shape_color}) => {

//     const template = `
// <svg width="300" height="200">
//     <circle cx="150" cy="100" r="80" fill="${shape_color}"/>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
// </svg>
//     `
//     console.log(template)

let myShape;

if(shape == "circle") {
    myShape = new Circle(shape_color)
}

if(shape == "triangle") {
    myShape = new Triangle(shape_color)
}

if(shape == "square") {
    myShape = new Square(shape_color)
}

const myText = new Text(text, text_color)

const mySVG = new SVG(myShape, myText);

    fs.writeFile("./examples/logo.svg", mySVG.render(), (err) => {
        if (err) throw err;
        console.log("Generated logo.svg")
    })
    
})