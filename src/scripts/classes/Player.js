import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite) {
    super (scene, x, y, sprite);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.setAnimations();
  }

  setAnimations() {
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'turn',
      frames: [{key: 'dude', frame: 4}],
      frameRate: 20,
    });

    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
      frameRate: 10,
      repeat: -1,
    });
  }
}
