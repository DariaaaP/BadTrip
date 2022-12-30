import { IMAGES } from 'constants';

export default class Food extends Phaser.Sprite {
  constructor(game) {
    const randomNumber = game.rnd.between(0, 3);
    const healthy = randomNumber === 3;
    
    const sprite = healthy ? IMAGES.EGGPLANT : randomNumber % 2 === 0 ? IMAGES.PIZZA : IMAGES.BURGER;
    
    const image = game.cache.getImage(sprite);
  
    const x = game.rnd.between(100, 900)
    const y = -image.height

    super(game, x, y, sprite);
    this.healthy = healthy;
    game.physics.arcade.enable(this);
    this.body.gravity.y = 70; //скорость падения
    if (game.score.lives >= 100 ) {
      this.body.gravity.y = 120;
    }
    if (game.score.lives >= 200 ) {
      this.body.gravity.y = 200;
    }
    if (game.score.lives >= 300 ) {
      this.body.gravity.y = 300;
    }
    if (game.score.lives >= 400 ) {
      this.body.gravity.y = 400;
    }
    if (game.score.lives >= 500 ) {
      this.body.gravity.y = 530;
    }
   
    if (game.score.lives >= 1000 ) {
      this.body.gravity.y = 1000; //скорость падения
    };
    this.animations.add('destroy', [0, 1, 2, 3, 4, 5], 1);
  }
}
