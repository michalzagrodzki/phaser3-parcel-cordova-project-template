import Phaser from "phaser";
import sceneGame from './game'

const loadCordova = document.createElement('script');
loadCordova.setAttribute('type','text/javascript');
loadCordova.setAttribute('src', 'cordova.js');
document.getElementsByTagName("head")[0].appendChild(loadCordova);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

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
