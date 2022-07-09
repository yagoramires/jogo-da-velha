const image = document.querySelectorAll('.game__image');
const startButton = document.querySelector('.game__start');

const board = document.querySelector('.game__board');

function randomChoice() {
  const options = ['rock', 'paper', 'scissor'];

  const numero = Math.floor(Math.random() * options.length);

  return options[numero];
}

function winner(playerChoice, botChoice) {
  if (playerChoice == botChoice) {
    return 'draw';
  } else if (playerChoice == 'rock' && botChoice == 'scissor') {
    return 'player';
  } else if (playerChoice == 'scissor' && botChoice == 'paper') {
    return 'player';
  } else if (playerChoice == 'paper' && botChoice == 'rock') {
    return 'player';
  } else {
    return 'bot';
  }
}

function validateChoice(choice) {
  if (choice == 'rock') {
    return `<img src="./assets/rock.png" alt="" class="game__image" />`;
  } else if (choice == 'paper') {
    return `<img src="./assets/paper.png" alt="" class="game__image" />`;
  } else {
    return `<img src="./assets/scissors.png" alt="" class="game__image" />`;
  }
}

startButton.addEventListener('click', () => {
  const player = document.querySelector('.game__avatar-player');

  const bot = document.querySelector('.game__avatar-bot');

  player.classList.remove('red');
  player.classList.remove('green');
  player.classList.remove('orange');

  bot.classList.remove('red');
  bot.classList.remove('green');
  bot.classList.remove('orange');

  const playerChoice = document.querySelector(
    'input[name="playerChoice"]:checked',
  ).value;
  const botChoice = randomChoice();

  const win = winner(playerChoice, botChoice);

  if (win == 'player') {
    player.classList.add('green');
    player.innerText = 'Winner';
    bot.classList.add('red');
    bot.innerText = 'Loser';
  } else if (win == 'bot') {
    player.classList.add('red');
    player.innerText = 'Loser';
    bot.classList.add('green');
    bot.innerText = 'Winner';
  } else {
    player.classList.add('orange');
    player.innerText = 'Draw';
    bot.classList.add('orange');
    bot.innerText = 'Draw';
  }

  board.innerHTML = `
  ${validateChoice(playerChoice)}
  <span>X</span>
  ${validateChoice(botChoice)}  
  `;
});
