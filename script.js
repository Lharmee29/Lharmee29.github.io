/* =========================
   PART 1: Job Duties (Loops)
   ========================= */

function showAMCDuties() {
  var duties = [
    "Coordinates unit communication with staff and patients",
    "Updates patient records and handles documentation",
    "Answers phones and routes calls appropriately",
    "Assists with admissions/discharges and unit workflow",
    "Supports daily clerical tasks to keep the unit organized"
  ];

  var count = parseInt(document.getElementById("amcCount").value, 10);

  if (isNaN(count) || count < 1) {
    document.getElementById("amcOutput").innerHTML =
      "Please enter a number from 1 to " + duties.length + ".";
    return;
  }
  if (count > duties.length) count = duties.length;

  var i = count - 1;
  var result = ""; // important to start blank

  while (i >= 0) {
    result = result + "• " + duties[i] + "<br>";
    i = i - 1;
  }

  document.getElementById("amcOutput").innerHTML = result;
}

function showHDDuties() {
  var duties = [
    "Assists customers with product questions and recommendations",
    "Stocks shelves and maintains aisle organization",
    "Helps customers locate items and complete purchases",
    "Supports store operations and keeps displays tidy",
    "Works with team members to meet daily department goals"
  ];

  var count = parseInt(document.getElementById("hdCount").value, 10);

  if (isNaN(count) || count < 1) {
    document.getElementById("hdOutput").innerHTML =
      "Please enter a number from 1 to " + duties.length + ".";
    return;
  }
  if (count > duties.length) count = duties.length;

  var i = count - 1;
  var result = "";

  while (i >= 0) {
    result = result + "• " + duties[i] + "<br>";
    i = i - 1;
  }

  document.getElementById("hdOutput").innerHTML = result;
}

/* ==============================
   PART 2: Salary Calc (If/Else)
   ============================== */

function calculateSalary() {
  var wageInput = document.getElementById("wage").value;
  var hoursInput = document.getElementById("hours").value;

  var wage = parseFloat(wageInput);
  var hours = parseFloat(hoursInput);

  if (isNaN(wage) || isNaN(hours)) {
    document.getElementById("result").innerHTML =
      "Please enter valid numbers for wage and hours.";
    return;
  }

  var annualSalary = wage * hours * 52;

  var salaryMessage; // undefined first

  if (annualSalary < 20000) {
    salaryMessage = ". The salary is too little.";
  } else if (annualSalary > 20000 && annualSalary < 25000) {
    salaryMessage = ". The salary is almost enough. Let’s negotiate.";
  } else {
    salaryMessage = ". This is a great salary for me.";
  }

  document.getElementById("result").innerHTML =
    "The salary is $" + annualSalary.toFixed(2) + salaryMessage;
}