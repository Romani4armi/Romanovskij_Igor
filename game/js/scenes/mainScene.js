let platforms;
export default class mainScene extends Phaser.Scene {
    constructor () {
        super("mainScene")
    }
    preload(){
        this.load.image('background_1', 'image/background/background_1.png');
        this.load.image('platform', 'image/background/platform.png');
    }
    
    create(){
        this.add.image(400, 300, 'background_1');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'platform').setScale(1).refreshBody();
    }
    update(){
        console.log('update')
    }
}