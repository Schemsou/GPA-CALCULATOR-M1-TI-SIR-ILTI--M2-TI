"use strict";

const modulesCoef = {
  coefPFA: 3,
  coefBDA: 3,
  coefRPC: 3,
  coefRI: 2,
  coefTHP: 3,
  coefGPQ: 2,
  coefANG: 1,
};

const averageModule = (exam, test) => (test + exam * 2) / 3;

const getMarks = () => {
  const examValues = [
    "pfaExam",
    "bdaExam",
    "rpcExam",
    "riExam",
    "thpExam",
    "gpqExam",
    "engExam",
  ];
  const testValues = [
    "pfaTest",
    "bdaTest",
    "rpcTest",
    "riTest",
    "thpTest",
    "gpqTest",
  ];

  const getValue = (name) =>
    parseFloat(document.querySelector(`#${name}`).value);

  const pfa = averageModule(getValue(examValues[0]), getValue(testValues[0]));
  const bda = averageModule(getValue(examValues[1]), getValue(testValues[1]));
  const rpc = averageModule(getValue(examValues[2]), getValue(testValues[2]));
  const ri = averageModule(getValue(examValues[3]), getValue(testValues[3]));
  const thp = averageModule(getValue(examValues[4]), getValue(testValues[4]));
  const gpq = averageModule(getValue(examValues[5]), getValue(testValues[5]));
  const engExam = getValue(examValues[6]);

  if (
    isNaN(pfa) ||
    isNaN(bda) ||
    isNaN(rpc) ||
    isNaN(ri) ||
    isNaN(thp) ||
    isNaN(gpq) ||
    isNaN(engExam)
  ) {
    alert("Insérez toutes les notes svp!");
    return;
  }

  const result =
    (pfa * modulesCoef.coefPFA +
      bda * modulesCoef.coefBDA +
      rpc * modulesCoef.coefRPC +
      ri * modulesCoef.coefRI +
      thp * modulesCoef.coefTHP +
      gpq * modulesCoef.coefGPQ +
      engExam * modulesCoef.coefANG) /
    17;
  const resultDiv = document.getElementById("rs");
  resultDiv.textContent = "Votre moyenne est : " + result.toFixed(2);
  resultDiv.style.display = "block";
};
