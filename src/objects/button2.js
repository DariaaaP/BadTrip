import { IMAGES, PALETTE, SFX } from 'constants';

export default class Buttonzan extends Phaser.Button {
  constructor(game, onClick) {
    const { world } = game;

    const fn = () => {
      game.sound.play(SFX.TWINKLE);
      onClick();
    };

    super(game, world.centerX, game.height - 200, IMAGES.ZAN, fn, null, 1, 0);
    this.anchor.setTo(0.5, 0);
  }
}
