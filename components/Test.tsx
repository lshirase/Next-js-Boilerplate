import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { type Sketch } from "react-p5-wrapper";

const sketch: Sketch = (p5) => {
  // eslint-disable-next-line no-param-reassign
  p5.setup = () => p5.createCanvas(600, 450);
  // eslint-disable-next-line no-param-reassign
  p5.draw = () => {
    // p5.background("#f1f1f1");
    // p5.fill(0);
    // p5.noStroke();
    // p5.translate(p5.width / 3, p5.height / 3);
    // for (let i = 0; i <= amount; i += 1) {
    //   const y = p5.map(i, 0, amount, -p5.height * 0.6, p5.height * 0.6);
    //   const x = p5.map(
    //     p5.sin(p5.radians(p5.frameCount + i * 4)),
    //     -1,
    //     1,
    //     -p5.width * 0.4,
    //     p5.width * 0.4
    //   );
    //   p5.push();
    //   p5.translate(x, y);
    //   p5.ellipse(0, 0, 15, 15);
    //   p5.pop();
    // }
    p5.background(0);
    p5.noStroke();
    let x;
    let y;
    const amount = 720;
    const size = 5;
    p5.fill("#f1f1f1");
    for (let i = 0; i < amount; i++) {
      y = p5.map(p5.sin(p5.radians(i)), -1, 1, -100, 100);
      x = p5.map(i, 0, amount, 0, p5.width);
      p5.ellipse(x, y + p5.height / 2, size, size);
    }
  };
};

export default function Test() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
