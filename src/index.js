import Phaser from "phaser";
import GameScene from './game.js'

const config = {
  type: Phaser.AUTO,
  parent: "phaser-cordova",
  width: window.outerWidth,
  height: window.outerHeight,
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
  new Phaser.Game(config);
  document.addEventListener('deviceready', () => {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // new Phaser.Game(config);
    navigator.splashscreen.hide();
  });
}

