const readline = require('readline');
const fs = require('fs');
const svgwrite = require('svgwrite');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function get_user_input(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function create_svg_file(text, text_color, shape, shape_color) {
  const dwg = svgwrite.createSvgDocument('logo.svg', { width: 300, height: 200 });

  dwg.text(text, 10, 30, { fill: text_color });

  if (shape === 'circle') {
    dwg.circle(150, 100, 50, { fill: shape_color });
  } else if (shape === 'triangle') {
    dwg.polygon([[150, 50], [100, 150], [200, 150]], { fill: shape_color });
  } else if (shape === 'square') {
    dwg.rect(100, 50, 100, 100, { fill: shape_color });
  }

  fs.writeFileSync('logo.svg', dwg.toSvg());
}

async function main() {
  const text = await get_user_input("Enter up to three characters: ");
  const text_color = await get_user_input("Enter text color (keyword or hex): ");

  console.log("Choose a shape: circle, triangle, square");
  const shape = await get_user_input("Enter a shape: ");

  const shape_color = await get_user_input("Enter shape color (keyword or hex): ");

  create_svg_file(text, text_color, shape, shape_color);

  console.log("Generated logo.svg");
  rl.close();
}

main();