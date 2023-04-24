/* eslint-disable no-plusplus */
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import Image from "next/image";
import { type Sketch } from "react-p5-wrapper";

import Yokai from "../public/assets/images/yokai.jpeg";

const bg = 0;
const fg = "#f1f1f1";
const tilesX = 30;
const tilesY = tilesX;
// eslint-disable-next-line unused-imports/no-unused-vars
let img = {};

const sketch: Sketch = (p5) => {
  // eslint-disable-next-line no-param-reassign
  p5.preload = () => {
    img = p5.loadImage(Yokai);
  };
  // eslint-disable-next-line no-param-reassign
  p5.setup = () => {
    // p5.preload();
    p5.createCanvas(600, 600);

    // console.log(img);
    // const img = p5.loadImage(Yokai);
    // p5.image.p5.resize(tilesX, tilesY);
  };
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
    if (img) {
      p5.background(bg);
      p5.fill(fg);
      p5.noStroke();

      const tileW = p5.width / tilesX;
      const tileH = p5.height / tilesY;

      for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
          const c = p5.img.get(x, y);
          const b = p5.brightness(c);
          p5.fill(b);

          p5.rect(x * tileW, y * tileH, tileW, tileH);
        }
      }
    }
  };
};

export default function Test() {
  return (
    <div>
      <NextReactP5Wrapper sketch={sketch} />
      <Image src={Yokai} alt="yo" />
    </div>
  );
}
