import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { type Sketch } from "react-p5-wrapper";

const sketch: Sketch = (p5) => {
  // eslint-disable-next-line no-param-reassign
  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);
  const amount = 100;
  // eslint-disable-next-line no-param-reassign
  p5.draw = () => {
    p5.background("#f1f1f1");
    p5.fill(0);
    p5.noStroke();
    p5.translate(p5.width / 3, p5.height / 3);
    for (let i = 0; i <= amount; i += 1) {
      const y = p5.map(i, 0, amount, -p5.height * 0.6, p5.height * 0.6);
      const x = p5.map(
        p5.sin(p5.radians(p5.frameCount + i * 4)),
        -1,
        1,
        -p5.width * 0.4,
        p5.width * 0.4
      );
      p5.push();
      p5.translate(x, y);
      p5.ellipse(0, 0, 15, 15);
      p5.pop();
    }
  };
};

export default function Test() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
