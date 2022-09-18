import Phaser from "phaser";

import sceneGame from './game'

const cordova = document.createElement('script');
cordova.setAttribute('type','text/javascript');
cordova.setAttribute('src', 'cordova.js');
document.getElementsByTagName("head")[0].appendChild(cordova);

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
    mode: Phaser.Scale.FIT
  },
  scene: [
    sceneGame
  ]
};

export default new Phaser.Game(config);
