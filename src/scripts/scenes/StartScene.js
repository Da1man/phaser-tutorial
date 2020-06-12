import Phaser from 'phaser';
import Player from "../classes/Player";
import Score from "../classes/Score";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.gameOver = false;
  }

  preload() {

  }

  create() {
    console.log('StartScene create')
    this.add.image(0, 0, 'sky').setOrigin(0);
    this.createPlatforms();
    this.createPlayer();

    this.createStars();
    this.createBombs();
    this.setLevelCollides();
    this.setOverlaps();
    this.addScore(this);
  }

  addScore(scene) {
    this.score = new Score(scene)
  }

  createBombs() {
    this.bombs = this.physics.add.group()
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
    this.physics.add.collider(this.player, this.bombs, (player, bomb) => {
      this.player.hitBomb(player, bomb)
    }, null, this);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.collider(this.bombs, this.platforms);
  }

  setOverlaps() {
    this.physics.add.overlap(this.player, this.stars, (player, star) => this.player.collectStar(player, star), null, this)
  }

  update(time, delta) {
    this.player.movePlayer()
  }

}
