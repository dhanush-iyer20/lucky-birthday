import "./styles.css";
var date = document.getElementById("date");
var luckyNumber = document.getElementById("luckyNumber");

document.getElementById("btn").addEventListener("click", () => {
  var sum = 0;
  const dateArr = date.value.split("-");
  console.log(dateArr);
  for (let i = 0; i < dateArr.length; i++) {
    sum = sum + parseInt(dateArr[i]);
  }
  console.log(sum);
  if (sum % luckyNumber.value === 0) {
    document.getElementById("text").innerText = "Yay! Your birthday is lucky";
  } else {
    document.getElementById("text").innerText = "oops! Bad luck";
  }
});
