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

// function sleep(waitSec) {
//   let spanedsec = 0;
//   let id = setInterval(function () {
//     spanedsec++;
//     if (spanedsec >= waitSec) {
//       clearInterval(id);
//     }
//   });
// }

// async function downloadtimer(timerleft) {
//   timerleft--;
//   document.getElementById("seconds").textContent = timerleft;

//   setInterval(function () {
//     timerleft--;
//     document.getElementById("seconds").textContent = timerleft;
//     if (timerleft == 0) {
//       clearInterval(downloadtimer);
//       console.log("left");
//       return new Promise((resolve) => {
//         resolve(0);
//       });
//     }
//   }, 1000);
// }

// setInterval(countdown(),5000);
countdown();
