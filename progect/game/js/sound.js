"use strict";
let soundBoom1 = new Audio;
    soundBoom1.src = 'sound/pig.mp3';
let soundBoom2 = new Audio;
    soundBoom2.src = 'sound/pig.mp3';
let track1 = new Audio('sound/track1.mp3');
let track2 = new Audio('sound/introBirds.mp3');
let slingShot  = new Audio('sound/slingshot.mp3');
let birdsFly  = new Audio('sound/pig2.mp3');
let bidrsIntro = new Audio('sound/birdsIntro2.mp3')

let soudsArr = [soundBoom1,soundBoom2,track1,track2,slingShot,birdsFly,bidrsIntro]

let checkedSound = false;
 
const soundMute = () => {
    soudsArr.forEach(i => {
        if(document.getElementById('soundCheck')){
            i.muted = !document.getElementById('soundCheck').checked;
        }
        
        
    })
}
soundMute()
function checkedSoundFF(){
        document.getElementById('soundCheck').checked = checkedSound;
        soundMute()
}
const rangeSoundFF = () => {
    
    const soundRange = document.getElementById('soundRange');
    localStorage.volumeSound || (localStorage.volumeSound = soundRange.value)
setTimeout(()=>{
    soudsArr.forEach(i => {
    i.volume = parseInt(localStorage.volumeSound)/100
    soundRange.value = parseInt(localStorage.volumeSound)
})}
,100)

setTimeout(()=>{bidrsIntro.play()},100)
soundRange.addEventListener('mouseup', e => {
    soudsArr.forEach( i => {
        i.volume = soundRange.value/100;
    localStorage.volumeSound = soundRange.value;
    })
})
}

