import Phaser from "phaser";
import GameScene from './game.js'

const config = {
  type: Phaser.AUTO,
  parent: "phaser-cordova",
  render: {
    antialias: false,
    pixelArt: true,
    roundPixels: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  scene: [
    GameScene
  ]
};

if (process.env.NODE_ENV !== 'production') {
  new Phaser.Game(config);
} 
else {
  document.addEventListener('deviceready', () => {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    new Phaser.Game(config);
    navigator.splashscreen.hide();
  });
}

