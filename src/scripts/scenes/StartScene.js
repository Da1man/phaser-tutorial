import Phaser from 'phaser';
import Player from "../classes/Player";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start')
  }

  create() {
    console.log('StartScene create')
    this.add.image(0, 0, 'sky').setOrigin(0);
    this.createPlatforms();
    this.createPlayer();
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();
    platforms.create(400,568, 'ground').setScale(2).refreshBody();

    platforms.create(600,400, 'ground');
    platforms.create(50,250, 'ground');
    platforms.create(750,220, 'ground');
  }

  createPlayer() {
    this.player = new Player(this, 100, 450, 'dude');
  }
}
