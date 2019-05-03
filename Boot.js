var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BootScene()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });

    },

    preload: function()
    {

        this.load.audio('GameMusic', 'assets/GameMusic.wav');
        this.load.image('title', 'assets/Tittle.png');
        this.load.image('Attacker', 'assets/Stickman.png');
        this.load.image('you', 'assets/You.png');
    },

    create: function()
    {
        console.log('kent has a bad game');
        var background = this.add.image(400, 300, 'title').setScale(0.95);
        //background.setSize(800, 600);
        this.add.text(38, 150, 'Press Any Key to Start', { fontSize: '18px', fill: '#fff'});
        this.input.keyboard.on('keydown', function() {
            this.scene.start('BarrelScene')
        }, this);
    }


});
