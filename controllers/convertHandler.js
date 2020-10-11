/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const numRegex = /^\d+\.*,*\/*\d*\.*,*\/*\d*\.*,*\/*\d*\.*,*\/*\d*/;
  const dotRegex = /\./g;
  const divideRegex = /\//g;
  const commaRegex = /,/g;
  const unitRegex = /^(gal|l|lbs|kg|mi|km)$/;

  this.testNumInput = function (result) {
    if (!numRegex.test(result)) {
      return (result = "1" + result);
    }
    return result;
  };

  this.getNum = function (input) {
    var result = input;
    result = this.testNumInput(result);
    result = result.match(numRegex)[0];

    if (
      commaRegex.test(result) ||
      (result.match(dotRegex) && result.match(dotRegex).length > 1) ||
      (result.match(divideRegex) && result.match(divideRegex).length > 1)
    ) {
      console.log("initNum: invalid number");
      return (result = "invalid number");
    } else {
      if (result[result.length - 1] === "/") result = result.replace("/", "");
      result = eval(result);
      console.log("initNum:", +result);
      return +result;
    }
  };

  this.getUnit = function (input) {
    var result = input;
    result = this.testNumInput(result);
    result = result.replace(numRegex, "");

    if (!unitRegex.test(result)) {
      console.log("initUnit: invalid unit");
      return (result = "invalid unit");
    } else {
      console.log("initUnit:", result);
      return result;
    }
  };

  this.getReturnUnit = function (initUnit) {
    var result;
    if (initUnit === "gal") result = "l";
    if (initUnit === "l") result = "gal";
    if (initUnit === "lbs") result = "kg";
    if (initUnit === "kg") result = "lbs";
    if (initUnit === "mi") result = "km";
    if (initUnit === "km") result = "mi";
    if (initUnit === "invalid unit") result = initUnit;
    console.log("returnunit:", result);
    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;
    if (unit === "gal") result = "gallons";
    if (unit === "l") result = "liters";
    if (unit === "lbs") result = "pounds";
    if (unit === "kg") result = "kilograms";
    if (unit === "mi") result = "miles";
    if (unit === "km") result = "kilometers";
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit === "gal") result = initNum * galToL;
    if (initUnit === "l") result = initNum / galToL;
    if (initUnit === "lbs") result = initNum * lbsToKg;
    if (initUnit === "kg") result = initNum / lbsToKg;
    if (initUnit === "mi") result = initNum * miToKm;
    if (initUnit === "km") result = initNum / miToKm;
    if (result !== undefined) result = result.toFixed(5);
    console.log("returnNumber:", +result);
    return +result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
