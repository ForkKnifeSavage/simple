var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: true
        }
    },
    scene: [
        BootScene,
        BattleGroundScene
    ]
};

var game = new Phaser.Game(config);