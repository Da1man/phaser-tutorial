import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite) {
    super (scene, x, y, sprite);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setPlayerProps();
    this.setAnimations();
    console.log(this, 'Player')
  }

  setPlayerProps() {
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.body.setGravityY(600);
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

  movePlayer() {
    if (this.scene.cursors.left.isDown) {
      this.setVelocityX(-160);
      this.anims.play('left', true);
    } else if (this.scene.cursors.right.isDown) {
      this.setVelocityX(160);
      this.anims.play('right', true);
    } else {
      this.setVelocityX(0);
      this.anims.play('turn')
    }

    if (this.scene.cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-660);
    }
  }

  collectStar(player, star) {
    // console.log(player, star)
    star.disableBody(true, true)
    this.scene.score.incScore()
  }
}
