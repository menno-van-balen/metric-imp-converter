/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const numRegex = /^\d+\.?,?\d*\/?\d*/;
  const unitRegex = /^(gal|lbs|mi)$/;
  const commaRegex = /^\d+,\d?/;

  this.testNumInput = function (result) {
    if (!numRegex.test(result)) {
      return (result = "1" + result);
    }
    return result;
  };

  this.getNum = function (input) {
    var result = input;
    result = this.testNumInput(result);

    if (commaRegex.test(result)) {
      console.log("initNum: invalid number");
      return (result = "invalid number");
    } else {
      result = result.match(numRegex)[0];
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
    if (initUnit === "gal") result = "L";
    if (initUnit === "lbs") result = "kg";
    if (initUnit === "mi") result = "km";
    if (initUnit === "invalid unit") result = initUnit;
    console.log("returnunit:", result);
    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;
    if (unit === "gal") result = "gallons";
    if (unit === "lbs") result = "pounds";
    if (unit === "mi") result = "miles";
    if (unit === "L") result = "liters";
    if (unit === "kg") result = "kilograms";
    if (unit === "km") result = "kilometers";
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit === "gal") result = initNum * galToL;
    if (initUnit === "lbs") result = initNum * lbsToKg;
    if (initUnit === "mi") result = initNum * miToKm;
    if (result !== undefined) result = result.toFixed(5);
    console.log("returnNumber:", result);
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let string = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    if (initUnit === "invalid unit" && initNum === "invalid number") {
      return {
        Error: "invalid number and unit",
        string: "invalid number and unit",
      };
    } else if (initUnit === "invalid unit") {
      return { Error: initUnit, string: initUnit };
    } else if (isNaN(initNum)) {
      return { Error: "invalid number", string: "invalid number" };
    } else {
      return { initNum, initUnit, returnNum, returnUnit, string };
    }
  };
}

module.exports = ConvertHandler;
