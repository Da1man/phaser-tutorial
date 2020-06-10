import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }

  preload(){
    console.log('BootScene preload')
  }

  create() {
    console.log('BootScene create')
    this.scene.start('Preload')
  }
}
