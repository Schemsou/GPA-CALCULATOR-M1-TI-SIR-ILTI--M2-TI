"use strict";

const modulesCoef = {
  coefJEE: 3,
  coefTC: 2,
  coefXML: 2,
  coefAPBD: 2,
  coefSI: 3,
  coefDM: 2,
  coefPLAT: 2,
  coefANG: 1,
};

const averageModule = (exam, test) => (test + exam * 2) / 3;

const getMarks = () => {
  const examValues = [
    "jeeExam",
    "tcExam",
    "xmlExam",
    "apbdExam",
    "siExam",
    "dmExam",
    "pcExam",
    "engExam",
  ];
  const testValues = [
    "jeeTest",
    "tcTest",
    "xmlTest",
    "apbdTest",
    "siTest",
    "dmTest",
    "pcTest",
  ];

  const getValue = (name) =>
    parseFloat(document.querySelector(`#${name}`).value);

  const jee = averageModule(getValue(examValues[0]), getValue(testValues[0]));
  const tc = averageModule(getValue(examValues[1]), getValue(testValues[1]));
  const xml = averageModule(getValue(examValues[2]), getValue(testValues[2]));
  const apbd = averageModule(getValue(examValues[3]), getValue(testValues[3]));
  const si = averageModule(getValue(examValues[4]), getValue(testValues[4]));
  const dm = averageModule(getValue(examValues[5]), getValue(testValues[5]));
  const pc = averageModule(getValue(examValues[6]), getValue(testValues[6]));
  const engExam = getValue(examValues[7]);

  const result =
    (jee * modulesCoef.coefJEE +
      tc * modulesCoef.coefTC +
      xml * modulesCoef.coefXML +
      apbd * modulesCoef.coefAPBD +
      si * modulesCoef.coefSI +
      dm * modulesCoef.coefDM +
      pc * modulesCoef.coefPLAT +
      engExam * modulesCoef.coefANG) /
    17;
  const resultDiv = document.getElementById("rs");
  resultDiv.textContent = "Votre moyenne est : " + result.toFixed(2);
  resultDiv.style.display = "block";
};
