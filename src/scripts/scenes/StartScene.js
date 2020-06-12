import Phaser from 'phaser';
import Player from "../classes/Player";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  preload() {

  }

  create() {
    console.log('StartScene create')
    this.add.image(0, 0, 'sky').setOrigin(0);
    this.createPlatforms();
    this.createPlayer();

    this.createStars();
    this.setLevelCollides();
    this.setOverlaps();
  }

  createStars() {
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: {x: 12, y: 0, stepX: 70},
    });

    this.stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    });
  }

  createPlatforms() {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
  }

  createPlayer() {
    this.player = new Player(this, 100, 450, 'dude');
  }

  setLevelCollides() {
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
  }

  setOverlaps() {
    this.physics.add.overlap(this.player, this.stars, (player, star) => this.player.collectStar(player, star), null, this)
  }

  update(time, delta) {
    this.player.movePlayer()
  }

}
