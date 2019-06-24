var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $result = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $gameTime = document.querySelector('#game-time');

var color = ['red', 'green', 'blue', 'yellow', 'black'];
var score = 0;
var isGameStarted = false;

$start.addEventListener('click',startGame);
$gameTime.addEventListener('input', setGameTime);
$game.addEventListener('click', handleBoxClick);




function startGame() {
    score = 0;
    setGameTime();
    $gameTime.setAttribute('disabled', 'true');
    show($timeHeader);
    hide($resultHeader);
   // $timeHeader.classList.remove('hide');
   // $resultHeader.classList.add('hide');
    isGameStarted = true;
    $game.style.backgroundColor = '#fff';
    hide($start);
    //$start.classList.add('hide');
    var interval = setInterval(function () {
        var time = parseFloat($time.textContent);
        if(time<= 0){
        clearInterval(interval);
        endGame()
        } else{
            $time.textContent = (time - 0.1).toFixed(1);
        }

    }, 100);
    renderBox();

}
function setGameScore() {
    $result.textContent = score.toString();
}
function setGameTime() {
    var time =  +$gameTime.value;
    $time.textContent = time.toFixed(1);
}

function endGame() {
    $gameTime.removeAttribute('disabled');
    isGameStarted = false;
    setGameScore();
    show($start);
   // $start.classList.remove('hide');
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    hide($timeHeader);
     // $timeHeader.classList.add('hide');
    show($resultHeader);
   //$resultHeader.classList.remove('hide');
}


function renderBox() {
    $game.innerHTML = '';
    var box = document.createElement('div');
    var boxSize = getRandom(30, 100); //создали переменную boxSize
    var gameSize = $game.getBoundingClientRect(); //getBoundingClientRect() здесь получаем значение  размеров элемента
// относительно экрана, т.е. gameSize размеры поля игра
    var maxTop = gameSize.height - boxSize; //создали переменную которая считает максимальное отклонение влево
    var maxLeft = gameSize.width - boxSize; //создали переменную которая считает максимальное отклонение влево
    var randomColorIndex = getRandom(0, color.length); //генерация случайного цвета
    //  и используем функцию getRandom для формирования случайных размеров в диапазоне
    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = color[randomColorIndex];
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    $game.insertAdjacentElement('afterbegin', box);
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');


}

function handleBoxClick(event) {
    if(!isGameStarted){
    return;
    }
    if (event.target.dataset.box){
        score++;
        renderBox();
    }

}
//Создали функцию getRandom для генерации случайных чисел в диапазоне
function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min) + min);
}

function show($el){
    $el.classList.remove('hide');
}

function  hide($el) {
    $el.classList.add('hide');
}