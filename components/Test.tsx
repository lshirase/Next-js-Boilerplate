import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { type Sketch } from "react-p5-wrapper";

const sketch: Sketch = (p5) => {
  // eslint-disable-next-line no-param-reassign
  p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);

  // eslint-disable-next-line no-param-reassign
  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
};

export default function Test() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
