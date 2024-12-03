// じゃんけんゲームの実装

// 結果表示用の要素を作成
const resultDiv = document.getElementById('js-result');

// ボタンを作成する関数
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  resultDiv.appendChild(button);
}

// コンピュータの手をランダムに選択する関数
function getComputerChoice() {
  const choices = ['グー', 'チョキ', 'パー'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// 勝敗を判定する関数
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return '引き分け';
  }
  if (
    (playerChoice === 'グー' && computerChoice === 'チョキ') ||
    (playerChoice === 'チョキ' && computerChoice === 'パー') ||
    (playerChoice === 'パー' && computerChoice === 'グー')
  ) {
    return 'プレイヤーの勝ち';
  }
  return 'コンピュータの勝ち';
}

// じゃんけんを実行する関数
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  
  // 結果を表示
  const resultText = document.createElement('p');
  resultText.textContent = `プレイヤー: ${playerChoice} vs コンピュータ: ${computerChoice} - ${result}`;
  resultDiv.appendChild(resultText);
}

// ボタンを作成
createButton('グー', () => playGame('グー'));
createButton('チョキ', () => playGame('チョキ'));
createButton('パー', () => playGame('パー'));
