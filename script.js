
// コマンド一覧用js
const jsonFile = 'data.json';
  
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
    const commandList = document.getElementById('commandList');
    const data = JSON.parse(jsonString);
    let title = "test";
    data.commands.forEach(command => {
        
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

        if(command.remarks != null) {
            const remarks = document.createElement('p');
            remarks.textContent = `${command.remarks}`;
            remarks.classList.add("command-remarks");
            remarks.insert
            li.appendChild(remarks);
        }
    //   const programsDiv = document.createElement('div');
    //   programsDiv.classList.add("commandProgramDiv");
    //   for (const key in command.programs) {
    //       if (Object.hasOwnProperty.call(command.programs, key)) {
    //           const programString = document.createElement('span');
    //           programString.textContent = `${command.programs[key]}`;
            
    //           // 最後の要素以外は改行する
    //           if (key < Object.keys(command.programs).length - 1) {
    //               programString.appendChild(document.createElement('br')); // <br> タグを追加して改行する
    //           }
    //           programString.classList.add("command-program");
    //           programsDiv.appendChild(programString);
    //       }
    //   }
    //   li.appendChild(programsDiv);

    });
}

// JSONファイルを読み込み、データを表示する
loadJSON(displayCommand);



// モーダル用js
    // ボタン要素とモーダル要素を取得
    var modalBeginnerBtn = document.getElementById("modalBeginnerBtn");
    var modal = document.getElementById("BeginnerModal");
    
    // 閉じるボタン要素を取得
    var closeBtn = document.querySelector(".close");
    
    // ボタンがクリックされたときの処理
    modalBeginnerBtn.addEventListener("click", function() {
      modal.style.display = "block"; // モーダルを表示
      modal.scrollTop = 0; // モーダルの一番上にスクロールする
    });
    
    // 閉じるボタンがクリックされたときの処理
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none"; // モーダルを非表示
    });
    
    // モーダルの外側をクリックしたときの処理（モーダルを閉じる）
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none"; // モーダルを非表示
      }
    });
