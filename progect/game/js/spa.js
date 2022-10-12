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
      
      <input class="btn" type=button value='Настройки' onclick='switchToSettingsPage()'>
      
      <input class="btn" type=button value='Правила' onclick='switchToRulePage()'>
      
      <div class="checkbox_contejner"> 
        <label class="checkbox style-e">
            <input id="soundCheck" type="checkbox"/>
            <div class="checkbox__checkmark"></div>
            <div class="checkbox__body"></div>
        </label>
        <div class="soundCheckBox"> Звук </div>
      </div>
  </div>

</div>
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
      <button class="btn_level" onclick="startLevel(${levelCounter =1})">1 
        <img class="starGold" style="filter : brightness(${loadStarForLevel(0,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(0,1)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(0,1)})" id="starGold3" src="img/starGold.png" alt="star">
        </button>
      <button  class="btn_level" onclick="startLevel(${levelCounter =2})">2 
        <img class="starGold" style="filter : brightness(${loadStarForLevel(1,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(1,1)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(1,1)})" id="starGold3" src="img/starGold.png" alt="star">
        </button>
      <br>
      <button class="btn_level"  onclick="startLevel(${levelCounter =3})">3 
        <img class="starGold" style="filter : brightness(${loadStarForLevel(2,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(2,1)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(2,1)})" id="starGold3" src="img/starGold.png" alt="star">
        </button>
      <button  class="btn_level" onclick="startLevel(${levelCounter =4})">4 
        <img class="starGold" style="filter : brightness(${loadStarForLevel(3,1)})" id="starGold1"  src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(3,1)})" id="starGold2" src="img/starGold.png" alt="star">
        <img class="starGold"  style="filter : brightness(${loadStarForLevel(3,1)})" id="starGold3" src="img/starGold.png" alt="star">
        </button>
</div>
     
<br id="a${levelCounter=0}"> 
<button class="btnCanvas" onclick='switchToStartScreePage()'>Назад</button>

`
}
const gameFF = () => `


<div id="game" style="display:none"></div>
`
const soundPage = () => `
<div class="conteiner">
  <div class="btns">
    <div class="checkbox_contejner"> 
        <label class="checkbox style-e">
            <input id="soundCheck" type="checkbox"/>
            <div class="checkbox__checkmark"></div>
            <div class="checkbox__body"></div>
        </label>
        <div class="soundCheckBox"> Звук </div>
      </div>
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
pageHTML+=soundPage()
break;
case '#gameFF':
pageHTML+=gameFF()
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
}

const switchToSoundPage = () => {
switchToState( { pagename: 'sound-page' } )
}
const switchToGamePage = () => {
switchToState( { pagename:'gameFF' } )
}

switchToStateFromURLHash();