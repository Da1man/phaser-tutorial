import Phaser from "phaser";
import BootScene from "./scripts/scenes/BootScene";
import PreloadScene from "./scripts/scenes/PreloadScene";
import StartScene from "./scripts/scenes/StartScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, PreloadScene, StartScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y:300},
      debug: false,
    }
  }
};

const game = new Phaser.Game(config);
