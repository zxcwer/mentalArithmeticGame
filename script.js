//data
function update(i) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let no1 = data[i].text[0];
      let symbol = data[i].text[1];
      let no2 = data[i].text[2];
      let no3 = data[i].text[3];
      document.querySelector("#box").innerHTML = `
          <div class="item"> ${no1}</div>
          <div class="item"> ${symbol}</div>
          <div class="item"> ${no2}</div>
          <div class="item"> = </div>
          <div class="item"> ${no3}</div>
          `;
    });
}

let questionNumber = 0;

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
      console.log(questionNumber);
    } else {
      i++;
    }
  }, 1000);
}

function button() {
  questionNumber++;
  update(questionNumber);
}
countdown();
