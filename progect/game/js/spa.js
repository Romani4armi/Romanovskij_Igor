let levelCounter = 0;
  let levelsArr = [];
  if (localStorage.levelsArr){
    levelsArr = localStorage.levelsArr.split(',')
  } else {
    levelsArr = [0,0,0,0,0];
  }
   
const loadStarForLevel = (level,star) => {

    const lev = parseInt(levelsArr[level])
    if (lev===0) return 0
    if (lev<=3 && star === 1){
        return 1
    }
    if (lev<=2 && star === 2) {
        return 1
    }
    if (lev<=1 && star === 3){
        return 1
    }  

    return 0
}


let levelStars = `
<div class="level_complite_star">
    <div class="star_level"> <div id="star_1"></div> </div>
    <div class="star_level"><div id="star_2"></div></div>
    <div class="star_level"><div id="star_3"></div></div>
</div>
<div>
  <button class="btnStar" onclick='switchToStartPage()'>Back</button>
  <button class="btnStar" onclick='startLevel(0)'>Restart</button>  
  <button class="btnStar" onclick='startLevel(1)' id="next_btn">Next</button>  
</div>
`
const  startScreen = () => `
<div class="conteiner">
  <div class="btns">
      
      <input class="btn" type=button value='Начать игру' onclick='switchToStartPage()'>
      
      <input class="btn" type=button value='Сохранить ' onclick='switchToRegPage    ()'>
      
      <input class="btn" type=button value='Настройки' onclick='switchToSettingsPage()'>
      
      <input class="btn" type=button value='Правила' onclick='switchToRulePage()'>
      

      <div class="checkbox_contejner"> 
        <label class="checkbox style-e">
            <input id="soundCheck" onclick="soundMute(); checkedSound = !checkedSound" type="checkbox"/>
            <div class="checkbox__checkmark"></div>
            <div class="checkbox__body"></div>
        </label>
        <div class="soundCheckBox"> Звук </div>
      </div>
  </div>

</div>
<script type="text/javascript"> 
         
        console.log('afasfasdf)
</script>
`
const settingF = () => `
<div class="conteiner">
  <div class="btns">
    
      <div id="backgr" style="display: none"> </div>
      <input class="btn" type=button value='Фон' onclick='backgroundBody(this)'>
      <input class="btn" type=button value='Звук' onclick='switchToSoundPage()'>
      <input class="btn" type=button value='Назад' onclick='switchToStartScreePage()'>
      
  </div>

</div>`
const ruleF = () => `
<div class="conteiner">
  <div class="btns">
      <div class="pravila"> 
        Ваша цель – избавиться от зеленых свинок, 
        тогда вы сможет пройти уровень. Доступ к свинкам заблокирован 
        с помощью различных конструкций из дерева, стекла, камня и прочих материалов.
         Вы должны использовать злых птиц, чтобы уничтожить преграду и свинок. 
        </div>
      
      <input class="btn" type=button value='Назад' onclick='switchToStartScreePage()'>
  </div>

</div>
`
const startGame = () => {
return `

<div class="levels"> 
      <button class="btn_level" onclick="startLevel(0,${levelCounter =1})">
        <img class="starGold" style="filter : brightness(${loadStarForLevel(0,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(0,2)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(0,3)})" id="starGold3" src="img/starGold.png" alt="star">
        <br> 1
        </button>
      <button  class="btn_level" onclick="startLevel(0,${levelCounter = 2})">
        <img class="starGold" style="filter : brightness(${loadStarForLevel(1,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(1,2)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(1,3)})" id="starGold3" src="img/starGold.png" alt="star">
        <br> 2
        </button>
      <br>
      <button class="btn_level"  onclick="startLevel(0,${levelCounter =3})">
        <img class="starGold" style="filter : brightness(${loadStarForLevel(2,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(2,2)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(2,3)})" id="starGold3" src="img/starGold.png" alt="star">
        <br> 3
        </button>
      <button  class="btn_level" onclick="startLevel(0,${levelCounter =4})">
        <img class="starGold" style="filter : brightness(${loadStarForLevel(3,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(3,2)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(3,3)})" id="starGold3" src="img/starGold.png" alt="star">
        <br> 4
        </button>
</div>
     
<br id="a${levelCounter=0}"> 
<button class="btnCanvas" onclick='switchToStartScreePage()'>Назад</button>

`
}
const registrFF = () => `
<div class="conteiner">
    <div class="btns">
        <div class="btnReg" id="RulsReg"> введите свое имя для загрузки прогресса в игре, если вы новый игрок, то вы будете зарегестрированны  </div>
        <input class="btn btnName" type=text placeholder="введите имя" id="registName">
        
        <input class="btn" type=button value='Назад' onclick='switchToStartScreePage()'>
</div>

</div>
` 
const gameFF = () => `


<div id="game" style="display:none"></div>
`
const soundPage = () => `
<div class="conteiner">
  <div class="btns">
    <div class="checkbox_contejner"> 
        <label class="checkbox style-e">
            <input id="soundCheck" onclick="soundMute(); checkedSound = !checkedSound " type="checkbox"/>
            <div class="checkbox__checkmark"></div>
            <div class="checkbox__body"></div>
        </label>
        <div class="soundCheckBox"> Звук </div>
      </div>
      <input type="range" id="soundRange" min="0" max="100">
      <input class="btn" type=button value='Назад' onclick='switchToSettingsPage()'>
      
  </div>

</div>`
window.onhashchange=switchToStateFromURLHash;


function switchToStateFromURLHash() {
let URLHash=window.location.hash || "#start-screen";


let pageHTML = '';


switch ( URLHash ) {
case '#start-screen': 
pageHTML+=startScreen();
setTimeout(()=>{checkedSoundFF()},0);

break;
case '#start-page':
pageHTML+=startGame();
break;
case '#settings-page':
pageHTML+=settingF();
break;
case '#rule-page':
pageHTML+=ruleF();
break;  
case '#sound-page':
pageHTML+=soundPage();
setTimeout(()=>{checkedSoundFF()},0);
break;
case '#gameFF':
pageHTML+=gameFF()
break;
case '#registr': 
pageHTML += registrFF()
break;

}
document.getElementById('app').innerHTML=pageHTML ;

}

const switchToState = (newState) => {
location.hash=newState.pagename;
}

const  switchToStartScreePage = () => {
switchToState( { pagename:'start-screen' } );


}

const  switchToStartPage = ()  => {
switchToState( { pagename:'start-page' } );

}

const  switchToSettingsPage = () => {
switchToState( { pagename:'settings-page' } );

}

const  switchToRulePage = () => {
switchToState( { pagename:'rule-page' } );
document.getElementById('soundCheck').checked = checkedSound;
}

const switchToSoundPage = () => {
switchToState( { pagename: 'sound-page' } )
setTimeout(()=>{
   rangeSoundFF() 
},10)

}
const switchToGamePage = () => {
switchToState( { pagename:'gameFF' } )
}
const switchToRegPage = () => {
    switchToState( { pagename:'registr' } )
    setTimeout(()=>{
        const player = document.getElementById('registName');

player.addEventListener('blur',()=>{
    userName =  player.value 
    
    storeInfo()
})
    },10)
}
switchToStateFromURLHash();