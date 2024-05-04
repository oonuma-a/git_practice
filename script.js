
// コマンド一覧用js
const jsonFile = 'data.json';
const beginner = 1;
const intermediate = 2;
const advanced = 3;

// 解説用のテキスト要素を取得
var beginnerExplanationDiv = document.getElementById("beginnerExplanation");
var intermediateExplanationDiv = document.getElementById("intermediateExplanation");

// 解説画面からトップに戻るボタン
var hideListBtn = document.getElementById("hideListBtn");
var showIntermediateExplanationListBtn = document.getElementById("beginnerModalBtn");
var showIntermediateExplanationListBtn = document.getElementById("intermediateModalBtn");

// 閉じるボタン要素を取得
var closeBtns = document.querySelectorAll(".close");

hideCommandList();

function hideCommandList() {
  beginnerExplanationDiv.style.display = "none";
  intermediateExplanationDiv.style.display = "none";
  hideListBtn.style.display = "none";
  showIntermediateExplanationListBtn.style.display = "none";
  document.getElementById('beginnerModalBtn').style.display = "block";
  document.getElementById('intermediateModalBtn').style.display = "block";
  document.getElementById('beginnerTopReturnBtn').style.display = "none";
  document.getElementById('intermediateTopReturnBtn').style.display = "none";
  
}

// 一覧ボタンを非表示にする関数
function hideList() {
  document.getElementById('beginnerExplanation').style.display = 'none';
  document.getElementById('intermediateExplanation').style.display = 'none';
}

// 一覧を表示するボタンにクリックイベントを追加
beginnerModalBtn.addEventListener('click', function() {
  beginnerExplanationDiv.style.display = 'block';
});
intermediateModalBtn.addEventListener('click', function() {
  intermediateExplanationDiv.style.display = 'block';
});

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
// function displayCommand(jsonString) {
//   document.getElementById('commandList').style.display = "block";
//   const commandList = document.getElementById('commandList');
//   const data = JSON.parse(jsonString);
//   let title = "test";
//   data.commands.forEach(command => {
//     // const beginner = 1;
//     // const intermediate = 2;
//     // const advanced = 3;
//       if (command.level == intermediate) {  //レベルリスト始
//         const li = document.createElement('li');
//         commandList.appendChild(li);
//         if(title !== command.category) {
//             title = command.category;
//             const category = document.createElement('h3');
//             category.textContent = `${command.category}`;
//             category.classList.add("command-category");
//             li.appendChild(category);
//         }

//       const text = document.createElement('p');
//       text.innerHTML = command.text.replace(/\n/g, '<br>');
//       text.classList.add("command-text");
//       li.appendChild(text);
  
//       if(command.remarks != null) {
//           const remarks = document.createElement('p');
//           remarks.textContent = `${command.remarks}`;
//           remarks.classList.add("command-remarks");
//           remarks.insert
//           li.appendChild(remarks);
//       }

//       const programsDiv = document.createElement('div');
//       programsDiv.classList.add("commandProgramDiv");
      
//       const programString = document.createElement('p');
//       programString.classList.add("command-program");
      
//       // "git " で始まるかどうかをチェックしてクラスを追加
//       let gitString = document.createElement('span');
//       if (command.program.startsWith("git ")) {
        
//           command.program = command.program.replace("git ", "");
//           gitString.classList.add("git-string");
//           gitString.textContent = "git ";
//       } else {
//       // "git " で始まらない場合はそのままテキストを追加
//           programString.textContent = command.program; 
//       }

//       programString.appendChild(gitString); // spanタグをpタグに追加
//       programString.appendChild(document.createTextNode(command.program)); // テキストノードをpタグに追加
//       programsDiv.appendChild(programString); // pタグをdivタグに追加

      
//       if(command.program2 != null) {
//         let gitString2 = document.createElement('span');
//         if (command.program2.startsWith("git ")) {
//           programString.innerHTML += "<br>または<br>"; 
//           // programsDiv.appendChild(document.createElement('br'));

//           command.program2 = command.program2.replace("git ", "");
//           gitString2.classList.add("git-string");
//           gitString2.textContent = gitString2.textContent+"git ";
//           } else {
//           // "git " で始まらない場合はそのままテキストを追加
//             gitString2.textContent = command.program; 
//         }
//         programString.appendChild(gitString2); // spanタグをpタグに追加
//         programString.appendChild(document.createTextNode(command.program2)); // テキストノードをpタグに追加
//         programsDiv.appendChild(programString); // pタグをdivタグに追加
//       } 

//       li.appendChild(programsDiv);
      
//     } //レベルリスト終
//   });
// }

// modalBtn関数
function beginnerListModalBtn(level) {
    
    
    // 解説を表示
    // event.target.style.display = "none"; // モーダルを非表示

    // ※保存用
    // JSONファイルを読み込み、データを表示する。
    // loadJSON(function(jsonString) {
    //     // 表示する前に一度リセット
    //     document.getElementById('commandList').innerHTML = '';
    //     hideListBtn.style.display = "block";
    //     document.getElementById('beginnerModalBtn').style.display = "none";
    //     document.getElementById('intermediateModalBtn').style.display = "none";
    //     document.getElementById('beginnerTopReturnBtn').style.display = "block";
    //     document.getElementById('intermediateTopReturnBtn').style.display = "block";
    //     displayCommand(jsonString);
    // });

    // モーダルを表示
    // commandModal.style.display = "block";
    // commandModal.scrollTop = 0; // モーダルの一番上にスクロールする
    
  
    hideListBtn.style.display = "block";
    document.getElementById('beginnerModalBtn').style.display = "none";
    document.getElementById('beginnerTopReturnBtn').style.display = "block";
    // 解説を表示
    beginnerExplanationDiv.style.display = "block";
}
function intermediateListModalBtn(level) {
    
  // 解説を表示
  hideListBtn.style.display = "block";
  document.getElementById('intermediateModalBtn').style.display = "none";
  document.getElementById('intermediateTopReturnBtn').style.display = "block";
  intermediateExplanationDiv.style.display = "block";
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
  all_num = 0;
  
  // 画面を出題モードで表示
  document.getElementById('other_area').style.display = 'none';
  document.getElementById('question_area').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('level_select_area').style.display = 'none';
  document.getElementById('current_nums').style.visibility = 'visible'
  hideCommandList();

  document.getElementById('end_btn').style.visibility = 'visible'; // 終了ボタンを表示

  var form = document.getElementById('hidden_form');
  form.style.display = 'block';

  // 次へボタンと戻るボタンを表示
  document.getElementById('next_btn').style.visibility = 'visible';
  document.getElementById('prev_btn').style.visibility = 'visible';

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
  
  // 最終問題の場合
  if (currentIndex == currentMaxCount) {
    document.getElementById('current_nums').style.visibility = 'hidden';
    document.getElementById('input_text').style.display = 'none';
    document.getElementById('enterBtn').style.display = 'none';
    document.getElementById('command_text').innerText = '全ての問題が終了しました。';
    document.getElementById('command_program').innerText = '';
    document.getElementById('command_remarks').innerText = '';
  
  // 最終問題ではない場合
  } else {
    document.getElementById('current_nums').style.visibility = 'visible';
    document.getElementById('input_text').style.display = 'block';
    document.getElementById('enterBtn').style.display = 'block';
    document.getElementById('command_text').innerText = command.text;
    if(command.remarks != null) {
      document.getElementById('command_remarks').innerText = "※"+command.remarks;
    }
    
    document.getElementById('hidden_form').style.display = 'block';
    document.getElementById('current_num').textContent = currentIndex+1;
    document.getElementById('all_num').textContent = currentMaxCount;

    if (currentIndex === 0) {
      document.getElementById('prev_btn').style.visibility = 'hidden';
    } else {
      document.getElementById('prev_btn').style.visibility = 'visible';
    }

    if (currentIndex === currentMaxCount) {
      document.getElementById('next_btn').style.visibility = 'hidden';
    } else {
      document.getElementById('next_btn').style.visibility = 'visible';
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
}

// フォーム送信後に入力データを判定する関数
function checkAnswer(event) {
  var inputText = document.getElementById('input_text').value;
  var index = usedIndexes[currentIndex];
  var command = data.commands[index];
  var correctProgram = command.program;
  var correctProgram2 = command.program2;

  if (inputText === correctProgram || inputText === correctProgram2) {
    document.getElementById('message').style.color = '#18d7b4';
    document.getElementById('message').innerText = '正解';
    document.getElementById('command_program').innerText = command.program;
    if (command.program2 != null) {
      document.getElementById('command_program').innerText += "\nまたは\n"+ command.program2;
    }
    document.getElementById('next_btn').style.visibility = 'visible';
    document.getElementById('prev_btn').style.visibility = 'visible';
  } else {
    document.getElementById('message').style.color = '#eb176f';
    document.getElementById('message').innerText = '不正解';
    document.getElementById('command_program').innerText = command.program;
    if (command.program2 != null) {
      document.getElementById('command_program').innerText += "\nまたは\n"+ command.program2;
    }
  }

  return false;
}

// Enterキーで送信するためのイベントリスナーを追加
document.getElementById('input_text').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトの動作をキャンセル
    checkAnswer(event); // フォームの送信を処理
  }
});
// // キーボードの←→キーで前後の問題を切り替える
// // キーボード操作が不可になるためNG
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowRight') {
//     showNext(); // 次の問題を表示
//   } else if (event.key === 'ArrowLeft') {
//     showPrevious(); // 前の問題を表示
//   }
// });

// 次へボタンをクリックすると次の問題を表示する関数
function showNext() {
  if (currentIndex != currentMaxCount) {
    currentIndex++;
    document.getElementById('command_program').innerText = '';
    document.getElementById('command_remarks').innerText = '';
    document.getElementById('input_text').value = '';
    displayQuestion();
    document.getElementById('message').innerText = '';
  }

}

// 戻るボタンをクリックすると前の問題を表示する関数
function showPrevious() {
  if (currentIndex != 0) {
    currentIndex--;
    document.getElementById('command_program').innerText = '';
    document.getElementById('command_remarks').innerText = '';
    document.getElementById('input_text').value = '';
    displayQuestion();
    document.getElementById('message').innerText = '';
    document.getElementById('current_nums').style.visibility = 'visible';
  }
}

// 終了ボタンをクリックするとフォームを非表示にする関数
function endQuiz() {
  // 他のボタンを再度表示
  document.getElementById('beginner_btn').style.display = 'block';
  document.getElementById('intermediate_btn').style.display = 'block';
  // document.getElementById('advanced_btn').style.display = 'block';
  document.getElementById('end_btn').style.visibility = 'hidden';

  // 出題用のボタンを非表示
  document.getElementById('next_btn').style.visibility = 'hidden';
  document.getElementById('prev_btn').style.visibility = 'hidden';
  document.getElementById('current_nums').style.visibility = 'hidden';

  // 画面をトップ画面モードで表示
  document.getElementById('other_area').style.display = 'block';
  document.getElementById('question_area').style.display = 'none';
  document.getElementById('about').style.display = 'block';
  document.getElementById('level_select_area').style.display = 'block';

  var form = document.getElementById('hidden_form');
  form.style.display = 'none';
}


/* 広告画像表示 */
let img = new Array();
img[0] = '<A HREF="https://px.a8.net/svt/ejp?a8mat=3Z6V1S+53DJ3M+348+6F1WI" rel="nofollow">LOLIPOP</A><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=3Z6V1S+53DJ3M+348+6F1WI" alt="">';
img[1] = '<a href="https://px.a8.net/svt/ejp?a8mat=3Z6V1S+64AELU+5EOC+BWVTE" rel="nofollow">楽天Kobo</a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=3Z6V1S+64AELU+5EOC+BWVTE" alt="">';
img[2] = '<a href="https://px.a8.net/svt/ejp?a8mat=3Z6UA0+4MPE5U+32T6+5ZEMP" rel="nofollow"><img border="0" width="120" height="60" alt="" src="https://www26.a8.net/svt/bgt?aid=240504264280&wid=001&eno=01&mid=s00000014361001005000&mc=1"></a><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=3Z6UA0+4MPE5U+32T6+5ZEMP" alt="">';
img[3] = '<a href="https://px.a8.net/svt/ejp?a8mat=3NP6NS+1PX3OY+4RNG+5ZU29" rel="nofollow"><img border="0" width="120" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=221204728104&wid=001&eno=01&mid=s00000022246001007000&mc=1"></a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3NP6NS+1PX3OY+4RNG+5ZU29" alt="">';
img[4] = '<a href="https://px.a8.net/svt/ejp?a8mat=3NKZKO+FSKZHU+CO4+6CHB5" rel="nofollow"><img border="0" width="350" height="240" alt="" src="https://www25.a8.net/svt/bgt?aid=221008920955&wid=001&eno=01&mid=s00000001642001066000&mc=1"></a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3NKZKO+FSKZHU+CO4+6CHB5" alt="">';
img[5] = '<a href="https://px.a8.net/svt/ejp?a8mat=35DC04+EOOXYQ+50+2HQGAP" rel="nofollow"><img border="0" width="468" height="60" alt="" src="https://www28.a8.net/svt/bgt?aid=190418692888&wid=001&eno=01&mid=s00000000018015072000&mc=1"></a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=35DC04+EOOXYQ+50+2HQGAP" alt="">';

/* 広告をランダムに表示させる関数 */
img_random();
function img_random(){
num = Math.floor( Math.random() * img.length);
document.getElementById("img_random").innerHTML = img[num];
}