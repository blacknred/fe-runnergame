import { Keys } from "./lib/typings";
import { Player, Input, Decoration } from "./lib";
import playerStandRight from "./sprites/player_stand_right.png";
import playerStandLeft from "./sprites/player_stand_left.png";
import playerRunRight from "./sprites/player_run_right.png";
import playerRunLeft from "./sprites/player_run_left.png";
import platformImg from "./sprites/platform.png";
import platform2Img from "./sprites/platform2.png";
import hillsImg from "./sprites/hills.png";
import bgImg from "./sprites/bg.png";
import { Game } from "./game";
import "./style.css";

addEventListener("load", function () {
  // create canvas
  const canvas = document.body.appendChild(document.createElement("canvas"));
  canvas.width = 1024;
  canvas.height = 576;

  // init
  const game = new Game(
    canvas,
    new Input(Object.values(Keys)),
    new Player(canvas, {
      imgs: [
        { img: playerStandRight, cropWidth: 177, maxWidth: 66, maxFrames: 59 },
        { img: playerStandLeft, cropWidth: 177, maxWidth: 66, maxFrames: 59 },
        { img: playerRunRight, cropWidth: 341, maxWidth: 129, maxFrames: 29 },
        { img: playerRunLeft, cropWidth: 341, maxWidth: 129, maxFrames: 29 },
      ],
      width: 66,
      height: 150,
      x: 100,
      y: 100,
    }, ),
    [
      new Decoration(canvas, {
        imgs: [platform2Img],
        x: 580 + 300,
        y: 270,
      }),
      new Decoration(canvas, {
        imgs: [platformImg],
        x: -1,
        y: 470,
      }),
      new Decoration(canvas, {
        imgs: [platformImg],
        x: 580 + 100,
        y: 470,
      }),
      new Decoration(canvas, {
        imgs: [platformImg],
        x: 580 * 2 + 200,
        y: 470,
      }),
    ],
    [
      new Decoration(canvas, {
        imgs: [bgImg],
        x: -1,
        y: -1,
      }),
      new Decoration(canvas, {
        imgs: [hillsImg],
        x: -1,
        y: -1,
      }),
    ]
  );

  game.run();
});
