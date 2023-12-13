class SVG {
    // properties
    constructor(shape, text) {
        this.shape = shape
        this.text = text
    }

    // methods
    render() {
        return `
    <svg width="200" height="200">
        ${this.shape.render()}
        ${this.text.render()}
    </svg>`
    }
}

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 0 0, 200 200, 200" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`
    }
}

class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    render() {
        return `<text x="100" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = {
    SVG,
    Text,
    Circle,
    Triangle,
    Square
}


// const myShape = new Square("red");
// const myText = new Text("XYZ", "green")

// const mySVG = new SVG(myShape, myText);

// console.log(mySVG.render())   