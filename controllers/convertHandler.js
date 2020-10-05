/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const unitRegex = /(gal|lbs|mi)$/;
  // console.log(unitRegex);

  this.getNum = function (input) {
    // const unitLength = input.match(unitRegex)[0].length;
    var result = input.replace(unitRegex, "");
    console.log("initNum:", +result);
    return +result;
  };

  this.getUnit = function (input) {
    var result;
    if (input.match(unitRegex) === null) result = "invalid unit";
    else result = input.match(unitRegex)[0];
    console.log("initUnit:", result);
    return result;
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
    console.log("returnNumber:", result);
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let string = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    console.log(isNaN(initNum));
    var result;
    if (initUnit === "invalid unit")
      result = { Error: initUnit, string: initUnit };
    else if (isNaN(initNum))
      result = { Error: "invalid number", string: "invalid number" };
    else result = { initNum, initUnit, returnNum, returnUnit, string };

    return result;
  };
}

module.exports = ConvertHandler;
