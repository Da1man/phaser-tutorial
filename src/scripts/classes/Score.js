const textStyle = {
  fontSize: '32px',
  fill: '#000000',
};

const STAR_VALUE = 10;

export default class Score {
  constructor(scene) {
    this.scene = scene;
    this.scoreSum = 0
    this.createText();
  }

  createText() {
    this.scoreText = this.scene.add.text(16, 16, `Score: ${this.scoreSum}`, textStyle).setOrigin(0)
  }

  incScore() {
    this.scoreSum += STAR_VALUE;
    this.scoreText.setText(`Score: ${this.scoreSum}`)
  }
}
