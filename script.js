let questionNumber = 0; //問題の番目
let yes = document.getElementById("yes"); //"正"のボタン情報取得
let no = document.getElementById("no"); //"誤"のボタン情報取得
let correcting = "F";
let right = 0;
let wrong = 0;

//data
function update(i) {
  fetch("./Question/data2.json")
    .then((response) => response.json())
    .then((data) => {
      let no1 = data[i].text[0];
      let symbol = data[i].text[1];
      let no2 = data[i].text[2];
      let no3 = data[i].text[3];
      correcting = data[i].answer;
      document.querySelector("#box").innerHTML = `
          <div class="item"> ${no1}</div>
          <div class="item"> ${symbol}</div>
          <div class="item"> ${no2}</div>
          <div class="item"> = </div>
          <div class="item"> ${no3}</div>
          `;
    });
  console.log(correcting);
}

//countdown
let i = 0;
function countdown() {
  let timeleft = 5;
  var downloadTimer = setInterval(function () {
    document.getElementById("seconds").textContent = timeleft - i;
    if (timeleft - i <= 0) {
      i = 0;
      questionNumber++;
      update(questionNumber);
    } else {
      i++;
    }
  }, 800);
}

function button(checkId) {
  i = 0;
  questionNumber++;
  update(questionNumber);
  console.log(checkId);

  if (checkId == correcting) {
    right++;
    document.getElementById("right").textContent = right;
    console.log(right);
  } else if (checkId != correcting) {
    wrong++;
    document.getElementById("wrong").textContent = wrong;
  }
}

function checkAnswer() {}
countdown();
