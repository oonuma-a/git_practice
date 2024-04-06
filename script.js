
// コマンド一覧用js
const jsonFile = 'data.json';

// 解説用のテキスト要素を取得
var explanationDiv = document.getElementById("explanation");

// 解説画面からトップに戻るボタン
var showBeginnerListBtn = document.getElementById("showBeginnerListBtn");

// 閉じるボタン要素を取得
var closeBtns = document.querySelectorAll(".close");

firstView();

function firstView() {
  document.getElementById('commandList').innerHTML = '';
  explanationDiv.style.display = "none";
  showBeginnerListBtn.style.display = "none";
  document.getElementById('topReturnBtn').style.display = "none";
  document.getElementById('modalBeginnerBtn').style.display = "inline-block";
  
}

// 一覧ボタンを非表示にする関数
function hideList() {
  document.getElementById('explanation').style.display = 'none';
}

// 一覧を表示するボタンにクリックイベントを追加
showBeginnerListBtn.addEventListener('click', function() {
  explanationDiv.style.display = 'block';
});

// 一覧を非表示にするボタンを作成
// var hideListBtn = document.createElement('button');
// hideListBtn.textContent = '一覧を非表示';
// hideListBtn.style.position = 'fixed';
// hideListBtn.style.bottom = '10';
// hideListBtn.style.right = '10';
// hideListBtn.style.zIndex = '1';
// hideListBtn.style.display = 'none'; // 最初は非表示にしておく
// hideListBtn.addEventListener('click', hideList);
// document.body.appendChild(hideListBtn);


  // JSONファイルを読み込む関数
function loadJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', jsonFile, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          callback(xhr.responseText);
      }
  };
  xhr.send(null);
}


// JSONデータを表示する関数
function displayCommand(jsonString) {
  const beginner = 1;
  const intermediate = 2;
  const advanced = 3;

  const commandList = document.getElementById('commandList');
  const data = JSON.parse(jsonString);
  let title = "test";
  data.commands.forEach(command => {
      // if (command.level == beginner)
      const li = document.createElement('li');
      commandList.appendChild(li);
      if(title !== command.category) {
          title = command.category;
          const category = document.createElement('h3');
          category.textContent = `${command.category}`;
          category.classList.add("command-category");
          li.appendChild(category);
      }

      const text = document.createElement('p');
      text.innerHTML = command.text.replace(/\n/g, '<br>');
      text.classList.add("command-text");
      li.appendChild(text);
  
      if(command.remarks != null) {
          const remarks = document.createElement('p');
          remarks.textContent = `${command.remarks}`;
          remarks.classList.add("command-remarks");
          remarks.insert
          li.appendChild(remarks);
      }

      const programsDiv = document.createElement('div');
      programsDiv.classList.add("commandProgramDiv");
      
      const programString = document.createElement('p');
      programString.classList.add("command-program");
      
      const gitString = document.createElement('span');
      gitString.classList.add("git-string");
      gitString.textContent = "git ";
      
      programString.appendChild(gitString); // spanタグをpタグに追加
      programString.appendChild(document.createTextNode(command.program)); // テキストノードをpタグに追加
      programsDiv.appendChild(programString); // pタグをdivタグに追加


      li.appendChild(programsDiv);

  });
}

// モーダル用js
// モーダル要素を取得
// var commandModal = document.getElementById("commandModal");


// // 閉じるボタンがクリックされたときの処理
// closeBtns.forEach(function(closeBtn) {
//     closeBtn.addEventListener("click", function() {
//         // 対応するモーダルを非表示にする
//         this.closest('.modal').style.display = "none";
//     });
// });

// // モーダルの外側をクリックしたときの処理（モーダルを閉じる）
// window.addEventListener("click", function(event) {
//     if (event.target.classList.contains("modal")) {
//         event.target.style.display = "none"; // モーダルを非表示
//     }
// });

// modalBtn関数
function modalBtn(level) {
    
    // 解説を表示
    explanationDiv.style.display = "block";
    
    // 解説を表示
    // event.target.style.display = "none"; // モーダルを非表示

    // JSONファイルを読み込み、データを表示する
    loadJSON(function(jsonString) {
        // 表示する前に一度リセット
        document.getElementById('commandList').innerHTML = '';
        showBeginnerListBtn.style.display = "block";
        document.getElementById('modalBeginnerBtn').style.display = "none";
        document.getElementById('topReturnBtn').style.display = "inline-block";
        displayCommand(jsonString);
    });

    // モーダルを表示
    // commandModal.style.display = "block";
    // commandModal.scrollTop = 0; // モーダルの一番上にスクロールする
}


// 出題用JS
var currentIndex = 0; // 現在の問題のインデックス
var data = null; // JSONデータ
var lastInput = ''; // 最後に入力されたテキスト
var usedIndexes = []; // 出題済みの問題のインデックスを保持する配列
var currentMaxCount = 0; // 現在の問題の最大問題数

// ボタンをクリックするとフォームを表示する関数
function showForm(getLevel) {
  // 設定値の初期化
  currentIndex = 0; // 現在の問題のインデックス
  data = null; // JSONデータ
  lastInput = ''; // 最後に入力されたテキスト
  usedIndexes = []; // 出題済みの問題のインデックスを保持する配列
  currentMaxCount = 0; // 現在の問題の最大問題数
  
  // 画面を出題モードで表示
  document.getElementById('other_area').style.display = 'none';
  document.getElementById('question_area').style.display = 'block';

  // 出題中は他のボタンを非表示にする
  document.getElementById('beginner_btn').style.display = 'none';
  document.getElementById('intermediate_btn').style.display = 'none';
  document.getElementById('advanced_btn').style.display = 'none';
  document.getElementById('end_btn').style.display = 'inline-block'; // 終了ボタンを表示

  var form = document.getElementById('hidden_form');
  form.style.display = 'block';

  // 次へボタンと戻るボタンを表示
  document.getElementById('next_btn').style.display = 'inline-block';
  document.getElementById('prev_btn').style.display = 'inline-block';

  // 入力フォームにフォーカスを移動
  document.getElementById('input_text').focus();
  document.getElementById('input_text').setSelectionRange(0, 0);

  // JSONデータを読み込む
  loadJSON(function(response) {
    data = JSON.parse(response);
    // 問題のインデックスをランダムに並び替える
    shuffleIndexes(getLevel);
    // 最初の問題を表示
    displayQuestion();
  });
}

// 問題のインデックスをランダムに並び替える関数
function shuffleIndexes(getLevel) {
  var numQuestions = data.commands.length;
  var allIndexes = []; // すべての問題のインデックスを保持する配列

  // 使用済みリストに含まれていない問題のインデックスを取得
  for (var i = 0; i < numQuestions; i++) {
    if (data.commands[i].level == getLevel && usedIndexes.indexOf(i) == -1) {
      
      currentMaxCount++;
      allIndexes.push(i);
    }
  }

  // ランダムに並び替え
  allIndexes.sort(function() {
    return Math.random() - 0.5;
  });

  // ランダムに並び替えたインデックスを使用済みリストに追加
  usedIndexes = usedIndexes.concat(allIndexes);
}

// 問題と入力フォームを表示する関数
function displayQuestion() {

  var index = usedIndexes[currentIndex];
  var command = data.commands[index];
  
  if (currentIndex == currentMaxCount) {
    document.getElementById('command_text').innerText = '全ての問題が終了しました。';
    document.getElementById('command_program').innerText = '';
    document.getElementById('command_remarks').innerText = '';
  } else {
    document.getElementById('command_text').innerText = command.text;
      if(command.remarks != null) {
        document.getElementById('command_remarks').innerText = "※"+command.remarks;
      }
  }
  document.getElementById('hidden_form').style.display = 'block';

  if (currentIndex === 0) {
    document.getElementById('prev_btn').style.display = 'none';
  } else {
    document.getElementById('prev_btn').style.display = 'block';
  }

  if (currentIndex === currentMaxCount) {
    document.getElementById('next_btn').style.display = 'none';
  } else {
    document.getElementById('next_btn').style.display = 'block';
  }

  if (command.pre) {
    document.getElementById('input_text').value = command.pre;
  } else {
    document.getElementById('input_text').value = '';
  }
  
  // 入力フォームにフォーカスを移動
  document.getElementById('input_text').focus();
  document.getElementById('input_text').setSelectionRange(0, 0);
}

// フォーム送信後に入力データを判定する関数
function checkAnswer(event) {
  var inputText = document.getElementById('input_text').value;
  var index = usedIndexes[currentIndex];
  var command = data.commands[index];
  var correctProgram = "git " + command.program;
  
  if (inputText === correctProgram) {
    document.getElementById('message').innerText = '正解';
    document.getElementById('next_btn').style.display = 'inline-block';
    document.getElementById('prev_btn').style.display = 'inline-block';
  } else {
    document.getElementById('message').innerText = '不正解';
    document.getElementById('command_program').innerText = "git " + command.program;
  }

  // event.preventDefault();
  return false;
}

document.getElementById('hidden_form').addEventListener('submit', checkAnswer);

// 次へボタンをクリックすると次の問題を表示する関数
function showNext() {
  currentIndex++;
  document.getElementById('command_program').innerText = '';
  document.getElementById('command_remarks').innerText = '';
  document.getElementById('input_text').value = '';
  displayQuestion();
  document.getElementById('message').innerText = '';

}

// 戻るボタンをクリックすると前の問題を表示する関数
function showPrevious() {
  currentIndex--;
  document.getElementById('command_program').innerText = '';
  document.getElementById('command_remarks').innerText = '';
  document.getElementById('input_text').value = '';
  displayQuestion();
  document.getElementById('message').innerText = '';

}

// 終了ボタンをクリックするとフォームを非表示にする関数
function endQuiz() {
  // 他のボタンを再度表示
  document.getElementById('beginner_btn').style.display = 'inline-block';
  document.getElementById('intermediate_btn').style.display = 'inline-block';
  document.getElementById('advanced_btn').style.display = 'inline-block';
  document.getElementById('end_btn').style.display = 'none';

  // 出題用のボタンを非表示
  document.getElementById('next_btn').style.display = 'none';
  document.getElementById('prev_btn').style.display = 'none';

  // 画面をトップ画面モードで表示
  document.getElementById('other_area').style.display = 'block';
  document.getElementById('question_area').style.display = 'none';

  var form = document.getElementById('hidden_form');
  form.style.display = 'none';
}