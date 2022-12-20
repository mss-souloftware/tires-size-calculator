let width1 = document.querySelector("#psc-first0");
let ratio1 = document.querySelector("#psc-second0");
let diameter1 = document.querySelector("#psc-third0");

let width2 = document.querySelector("#psc-first1");
let ratio2 = document.querySelector("#psc-second1");
let diameter2 = document.querySelector("#psc-third1");

// Tabs Toggle

document
  .getElementById("psc-sizetype1-0")
  .addEventListener("click", function () {
    document.querySelector(".metric1").style.display = "flex";
    document.querySelector(".flotation1").style.display = "none";
    document.querySelector("#psc-sizetype1-1").classList.remove("selected");
    document.querySelector("#psc-sizetype1-0").classList.add("selected");
    selectFuncTire2();
    selectFuncTire1();
  });

document
  .getElementById("psc-sizetype1-1")
  .addEventListener("click", function () {
    document.querySelector(".metric1").style.display = "none";
    document.querySelector(".flotation1").style.display = "flex";
    document.querySelector("#psc-sizetype1-0").classList.remove("selected");
    document.querySelector("#psc-sizetype1-1").classList.add("selected");
    selectFuncTire2();
    selectFuncTire1();
  });

document
  .getElementById("psc-sizetype2-0")
  .addEventListener("click", function () {
    document.querySelector(".metric2").style.display = "flex";
    document.querySelector(".flotation2").style.display = "none";
    document.querySelector("#psc-sizetype2-1").classList.remove("selected");
    document.querySelector("#psc-sizetype2-0").classList.add("selected");
    selectFuncTire2();
    selectFuncTire1();
  });

document
  .getElementById("psc-sizetype2-1")
  .addEventListener("click", function () {
    document.querySelector(".metric2").style.display = "none";
    document.querySelector(".flotation2").style.display = "flex";
    document.querySelector("#psc-sizetype2-0").classList.remove("selected");
    document.querySelector("#psc-sizetype2-1").classList.add("selected");
    selectFuncTire2();
    selectFuncTire1();
  });

document.getElementById("sizeToggle").addEventListener("click", function () {
  document.querySelector("#sizeWrapper").style.display = "block";
  document.querySelector("#speedWrapper").style.display = "none";
  document.querySelector("#speedToggle").classList.remove("selected");
  document.querySelector("#sizeToggle").classList.add("selected");
});

document.getElementById("speedToggle").addEventListener("click", function () {
  document.querySelector("#speedWrapper").style.display = "block";
  document.querySelector("#sizeWrapper").style.display = "none";
  document.querySelector("#sizeToggle").classList.remove("selected");
  document.querySelector("#speedToggle").classList.add("selected");
});

width1.onchange = () => {
  selectFuncTire1();
  if (width1.value != "") {
    ratio1.removeAttribute("disabled");
    diameter1.removeAttribute("disabled");
  } else {
    ratio1.setAttribute("disabled", true);
    diameter1.setAttribute("disabled", true);
  }
};

ratio1.onchange = () => {
  if (ratio1.value != "") {
    diameter1.removeAttribute("disabled");
  } else {
    diameter1.setAttribute("disabled", true);
  }
};

diameter1.onchange = () => {
  if (diameter1.value != "") {
    let tireDiameter1 =
      ((Number(width1.value) * Number(ratio1.value)) / 2540) * 2 +
      Number(diameter1.value);
    document.querySelector("#psc-diameter-row .psc-tire1").textContent =
      tireDiameter1.toFixed(2);
    calcDiffrence();
    widthInInch1();
    calcDiffrenceWidth();
    sidewallCalc1();
    calcDiffrenceSidewall();
    circumference1();
    calcCircumference();
    mile1();
    calcMile();
    tireSpeed();
  } else {
    document.querySelector("#psc-diameter-row .psc-tire1").textContent = "";
  }
};

width2.onchange = () => {
  selectFuncTire2();
  // widthInInch2();
  if (width2.value != "") {
    ratio2.removeAttribute("disabled");
    diameter2.removeAttribute("disabled");
  } else {
    ratio2.setAttribute("disabled", true);
    diameter2.setAttribute("disabled", true);
  }
};

ratio2.onchange = () => {
  if (ratio2.value != "") {
    diameter2.removeAttribute("disabled");
  } else {
    diameter2.setAttribute("disabled", true);
  }
};

diameter2.onchange = () => {
  if (diameter2.value != "") {
    let tireDiameter2 =
      ((Number(width2.value) * Number(ratio2.value)) / 2540) * 2 +
      Number(diameter2.value);
    document.querySelector("#psc-diameter-row .psc-tire2").textContent =
      tireDiameter2.toFixed(2);
    calcDiffrence();
    widthInInch2();
    calcDiffrenceWidth();
    sidewallCalc2();
    calcDiffrenceSidewall();
    circumference2();
    calcCircumference();
    mile2();
    calcMile();
    tireSpeed();
  } else {
    document.querySelector("#psc-diameter-row .psc-tire2").textContent = "";
  }
};

const selectFuncTire1 = () => {
  document
    .querySelector("#psc-second0 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#psc-second0 option:first-child")
    .setAttribute("selected", true);
  document
    .querySelector("#psc-third0 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#psc-third0 option:first-child")
    .setAttribute("selected", true);
  document.querySelector("#psc-diameter-row .psc-tire1").textContent = "";
  document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-tire1").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-tire1").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-diff").textContent = "";
  document.querySelector("#psc-circumference-row .psc-tire1").textContent = "";
  document.querySelector("#psc-circumference-row .psc-diff").textContent = "";
  document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-tire1").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-diff").textContent = "";
};

const selectFuncTire2 = () => {
  document
    .querySelector("#psc-second1 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#psc-second1 option:first-child")
    .setAttribute("selected", true);
  document
    .querySelector("#psc-third1 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#psc-third1 option:first-child")
    .setAttribute("selected", true);
  document.querySelector("#psc-diameter-row .psc-tire2").textContent = "";
  document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-tire2").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-tire2").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-diff").textContent = "";
  document.querySelector("#psc-circumference-row .psc-tire2").textContent = "";
  document.querySelector("#psc-circumference-row .psc-diff").textContent = "";
  document.querySelector("#psc-diameter-row .psc-tire2").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-tire2").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-diff").textContent = "";
};

const widthInInch1 = () => {
  let widthInch1 = Number(width1.value) / 25.4;
  document.querySelector("#psc-width-row .psc-tire1").textContent =
    widthInch1.toFixed(2);
};

const widthInInch2 = () => {
  let widthInch2 = Number(width2.value) / 25.4;
  document.querySelector("#psc-width-row .psc-tire2").textContent =
    widthInch2.toFixed(2);
};

const calcDiffrence = () => {
  let tireDiameter1 = document.querySelector(
    "#psc-diameter-row .psc-tire1"
  ).innerText;
  let tireDiameter2 = document.querySelector(
    "#psc-diameter-row .psc-tire2"
  ).innerText;
  let tireVal1 = Number(tireDiameter1);
  let tireVal2 = Number(tireDiameter2);
  let diffVal1 = tireVal2 - tireVal1;
  let diffValFinal;
  if (tireVal1 < tireVal2) {
    diffValFinal = (diffVal1 / tireVal1) * 100;
  } else {
    diffValFinal = (diffVal1 / tireVal2) * 100;
  }
  if (tireVal1 != "" && tireVal2 != "") {
    document.querySelector("#psc-diameter-row .psc-diff").textContent =
      diffValFinal.toFixed(2) + "%";
  } else {
    document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  }
};

const calcDiffrenceWidth = () => {
  let tireDiameter1 = document.querySelector(
    "#psc-width-row .psc-tire1"
  ).innerText;
  let tireDiameter2 = document.querySelector(
    "#psc-width-row .psc-tire2"
  ).innerText;
  let tireVal1 = Number(tireDiameter1);
  let tireVal2 = Number(tireDiameter2);
  let diffVal1 = tireVal2 - tireVal1;
  let diffValFinal;
  if (tireVal1 < tireVal2) {
    diffValFinal = (diffVal1 / tireVal1) * 100;
  } else {
    diffValFinal = (diffVal1 / tireVal2) * 100;
  }
  if (tireVal1 != "" && tireVal2 != "") {
    document.querySelector("#psc-width-row .psc-diff").textContent =
      diffValFinal.toFixed(2) + "%";
  } else {
    document.querySelector("#psc-width-row .psc-diff").textContent = "";
  }
};

const sidewallCalc1 = () => {
  let sideWallT1 = document.querySelector("#psc-sidewall-row .psc-tire1");

  let sideWall1 = (Number(width1.value) / 25.4) * Number("." + ratio1.value);
  sideWallT1.textContent = sideWall1.toFixed(2);
};

const sidewallCalc2 = () => {
  let sideWallT2 = document.querySelector("#psc-sidewall-row .psc-tire2");

  let sideWall2 = (Number(width2.value) / 25.4) * Number("." + ratio2.value);
  sideWallT2.textContent = sideWall2.toFixed(2);
};

const calcDiffrenceSidewall = () => {
  let tireDiameter1 = document.querySelector(
    "#psc-sidewall-row .psc-tire1"
  ).innerText;
  let tireDiameter2 = document.querySelector(
    "#psc-sidewall-row .psc-tire2"
  ).innerText;
  let tireVal1 = Number(tireDiameter1);
  let tireVal2 = Number(tireDiameter2);
  let diffVal1 = tireVal2 - tireVal1;
  let diffValFinal;
  if (tireVal1 < tireVal2) {
    diffValFinal = (diffVal1 / tireVal1) * 100;
  } else {
    diffValFinal = (diffVal1 / tireVal2) * 100;
  }
  if (tireVal1 != "" && tireVal2 != "") {
    document.querySelector("#psc-sidewall-row .psc-diff").textContent =
      diffValFinal.toFixed(2) + "%";
  } else {
    document.querySelector("#psc-sidewall-row .psc-diff").textContent = "";
  }
};

const circumference1 = () => {
  let diameter1 = document.querySelector(
    "#psc-diameter-row .psc-tire1"
  ).innerText;
  let finalDiameter1 = diameter1 * 3.14;
  document.querySelector("#psc-circumference-row .psc-tire1").textContent =
    finalDiameter1.toFixed(2);
};

const circumference2 = () => {
  let diameter2 = document.querySelector(
    "#psc-diameter-row .psc-tire2"
  ).innerText;
  let finalDiameter2 = diameter2 * 3.14;
  document.querySelector("#psc-circumference-row .psc-tire2").textContent =
    finalDiameter2.toFixed(2);
};

const calcCircumference = () => {
  let tireDiameter1 = document.querySelector(
    "#psc-circumference-row .psc-tire1"
  ).innerText;
  let tireDiameter2 = document.querySelector(
    "#psc-circumference-row .psc-tire2"
  ).innerText;
  let tireVal1 = Number(tireDiameter1);
  let tireVal2 = Number(tireDiameter2);
  let diffVal1 = tireVal2 - tireVal1;
  let diffValFinal;
  if (tireVal1 < tireVal2) {
    diffValFinal = (diffVal1 / tireVal1) * 100;
  } else {
    diffValFinal = (diffVal1 / tireVal2) * 100;
  }
  if (tireVal1 != "" && tireVal2 != "") {
    document.querySelector("#psc-circumference-row .psc-diff").textContent =
      diffValFinal.toFixed(2) + "%";
  } else {
    document.querySelector("#psc-circumference-row .psc-diff").textContent = "";
  }
};

const mile1 = () => {
  let tireMile1 = document.querySelector(
    "#psc-circumference-row .psc-tire1"
  ).innerText;
  let finalMile1 = 63360 / Number(tireMile1);
  document.querySelector("#psc-revsmile-row .psc-tire1").textContent =
    finalMile1.toFixed(2);
};

const mile2 = () => {
  let tireMile2 = document.querySelector(
    "#psc-circumference-row .psc-tire2"
  ).innerText;
  let finalMile2 = 63360 / Number(tireMile2);
  document.querySelector("#psc-revsmile-row .psc-tire2").textContent =
    finalMile2.toFixed(2);
};

const calcMile = () => {
  let tireDiameter1 = document.querySelector(
    "#psc-revsmile-row .psc-tire1"
  ).innerText;
  let tireDiameter2 = document.querySelector(
    "#psc-revsmile-row .psc-tire2"
  ).innerText;
  let tireVal1 = Number(tireDiameter1);
  let tireVal2 = Number(tireDiameter2);
  let diffVal1 = tireVal2 - tireVal1;
  let diffValFinal;
  if (tireVal1 < tireVal2) {
    diffValFinal = (diffVal1 / tireVal1) * 100;
  } else {
    diffValFinal = (diffVal1 / tireVal2) * 100;
  }
  if (tireVal1 != "" && tireVal2 != "") {
    document.querySelector("#psc-revsmile-row .psc-diff").textContent =
      diffValFinal.toFixed(2);
  } else {
    document.querySelector("#psc-revsmile-row .psc-diff").textContent = "";
  }
};

// Flotation

let fOuterD1 = document.querySelector("#flotation1 .psc-first0");
let fWidth1 = document.querySelector("#flotation1 .psc-second0");
let fInnerD1 = document.querySelector("#flotation1 .psc-third0");

let fOuterD2 = document.querySelector("#flotation2 .psc-first1");
let fWidth2 = document.querySelector("#flotation2 .psc-second1");
let fInnerD2 = document.querySelector("#flotation2 .psc-third1");

fOuterD1.onchange = () => {
  flotationSelectFuncTire1();
  if (fOuterD1.value != "") {
    fWidth1.removeAttribute("disabled");
    fInnerD1.removeAttribute("disabled");
  } else {
    fWidth1.setAttribute("disabled", true);
    fInnerD1.setAttribute("disabled", true);
  }
};

fWidth1.onchange = () => {
  if (fWidth1.value != "") {
    fInnerD1.removeAttribute("disabled");
  } else {
    fInnerD1.setAttribute("disabled", true);
  }
};

fInnerD1.onchange = () => {
  if (fInnerD1.value != "") {
    flotationData1();
    flotationSidewall1();
    circumference1();
    mile1();
    calcDiffrence();
    calcDiffrenceWidth();
    calcDiffrenceSidewall();
    calcCircumference();
    mile1();
    calcMile();
    tireSpeed();
  }
};

fOuterD2.onchange = () => {
  flotationSelectFuncTire2();
  if (fOuterD2.value != "") {
    fWidth2.removeAttribute("disabled");
    fInnerD2.removeAttribute("disabled");
  } else {
    fWidth2.setAttribute("disabled", true);
    fInnerD2.setAttribute("disabled", true);
  }
};

fWidth2.onchange = () => {
  if (fWidth2.value != "") {
    fInnerD1.removeAttribute("disabled");
  } else {
    fInnerD2.setAttribute("disabled", true);
  }
};

fInnerD2.onchange = () => {
  if (fInnerD2.value != "") {
    flotationData2();
    flotationSidewall2();
    circumference2();
    mile2();
    calcDiffrence();
    calcDiffrenceWidth();
    calcDiffrenceSidewall();
    calcCircumference();
    mile1();
    calcMile();
    tireSpeed();
  }
};

const flotationSelectFuncTire1 = () => {
  document
    .querySelector("#flotation1 .psc-second0 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#flotation1 .psc-second0 option:first-child")
    .setAttribute("selected", true);
  document
    .querySelector("#flotation1 .psc-third0 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#flotation1 .psc-third0 option:first-child")
    .setAttribute("selected", true);
  document.querySelector("#psc-diameter-row .psc-tire1").textContent = "";
  document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-tire1").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-tire1").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-diff").textContent = "";
  document.querySelector("#psc-circumference-row .psc-tire1").textContent = "";
  document.querySelector("#psc-circumference-row .psc-diff").textContent = "";
  document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-tire1").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-diff").textContent = "";
};

const flotationSelectFuncTire2 = () => {
  document
    .querySelector("#flotation2 .psc-second1 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#flotation2 .psc-second1 option:first-child")
    .setAttribute("selected", true);
  document
    .querySelector("#flotation2 .psc-third1 option:first-child")
    .removeAttribute("selected");
  document
    .querySelector("#flotation2 .psc-third1 option:first-child")
    .setAttribute("selected", true);
  document.querySelector("#psc-diameter-row .psc-tire2").textContent = "";
  document.querySelector("#psc-diameter-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-diff").textContent = "";
  document.querySelector("#psc-width-row .psc-tire2").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-tire2").textContent = "";
  document.querySelector("#psc-sidewall-row .psc-diff").textContent = "";
  document.querySelector("#psc-circumference-row .psc-tire2").textContent = "";
  document.querySelector("#psc-circumference-row .psc-diff").textContent = "";
  document.querySelector("#psc-diameter-row .psc-tire2").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-tire2").textContent = "";
  document.querySelector("#psc-revsmile-row .psc-diff").textContent = "";
};

const flotationData1 = () => {
  document.querySelector("#psc-diameter-row .psc-tire1").textContent =
    fOuterD1.value;
  document.querySelector("#psc-width-row .psc-tire1").textContent =
    fWidth1.value;
};
const flotationData2 = () => {
  document.querySelector("#psc-diameter-row .psc-tire2").textContent =
    fOuterD2.value;
  document.querySelector("#psc-width-row .psc-tire2").textContent =
    fWidth2.value;
};

const flotationSidewall1 = () => {
  let outerDiameter = document.querySelector("#flotation1 .psc-first0").value;
  let innerDiameter = document.querySelector("#flotation1 .psc-third0").value;
  let finalSidewall = (outerDiameter - innerDiameter) / 2;
  document.querySelector("#psc-sidewall-row .psc-tire1").textContent =
    finalSidewall.toFixed(2);
};

const flotationSidewall2 = () => {
  let outerDiameter = document.querySelector("#flotation2 .psc-first1").value;
  let innerDiameter = document.querySelector("#flotation2 .psc-third1").value;
  let finalSidewall = (outerDiameter - innerDiameter) / 2;
  document.querySelector("#psc-sidewall-row .psc-tire2").textContent =
    finalSidewall.toFixed(2);
};

const tireSpeed = () => {
  let tireSpeed1 = document.querySelectorAll(
    "#psc-tsd-table .tire-1 .psc-tire1"
  );
  let tireSpeed2 = document.querySelectorAll(
    "#psc-tsd-table .tire-2 .psc-value"
  );
  let mileDiff = document.querySelector(
    "#psc-revsmile-row .psc-diff"
  ).innerText;
  let arrayNumb = [10, 20, 30, 40, 50, 60, 70];
  let mileDivide = Number(mileDiff) / 100;

  for (let i = 0; i < tireSpeed1.length; i++) {
    tireSpeed1[i].textContent = arrayNumb[i];
  }

  let speedFinalVal = [];

  for (let x = 0; x < tireSpeed2.length; x++) {
    let speedVal = arrayNumb[x] - arrayNumb[x] * mileDivide;
    speedFinalVal.push(speedVal);
  }

  for (let j = 0; j < tireSpeed2.length; j++) {
    tireSpeed2[j].textContent = speedFinalVal[j].toFixed(2);
  }
};
