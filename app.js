let totalLecture = document.getElementById("total");
let attendedLecture = document.getElementById("attended");
let targetPercentage = document.getElementById("percentage");
let res = document.getElementById("result");
let btn = document.getElementById("btn");

function calculateAttendance(total, attended, target) {
  target /= 100;
  let x = 0;
  while (true) {
    let newAttended = attended + x;
    let newTotal = total + x;
    let attendance = newAttended / newTotal;
    if (attendance >= target) {
      return x;
    }
    x++;
  }
}

btn.addEventListener("click", () => {
  let total = parseInt(totalLecture.value);
  let attended = parseInt(attendedLecture.value);
  let target = parseFloat(targetPercentage.value);
  if (!total || !attended || !target) {
    res.innerText = "Please enter Valid value";
  } else {
    let result = calculateAttendance(total, attended, target);
    res.innerText = `Your mission: Survive ${result} more lectures!`;
  }
});
