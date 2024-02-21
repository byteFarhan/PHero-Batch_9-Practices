//Solution of Problem -1
function calculateMoney(ticketsAmount) {
  if (!ticketsAmount || ticketsAmount <= 0) {
    return "Invalid Number!";
  }
  const ticketPrice = 120;
  const watchmenCost = 500;
  const totalStaffs = 8;
  const costPerStaff = 50;
  const totalExpense = watchmenCost + totalStaffs * costPerStaff;
  const totalRevenue = ticketPrice * ticketsAmount - totalExpense;
  return totalRevenue;
}
console.log("*****************-> Problem-1 Outputs ->************");
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

//Solution of Problem -2
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  const convertedName = name.toLowerCase();
  const lastLetterOfName = convertedName[convertedName.length - 1];
  if (
    lastLetterOfName === "a" ||
    lastLetterOfName === "y" ||
    lastLetterOfName === "i" ||
    lastLetterOfName === "e" ||
    lastLetterOfName === "o" ||
    lastLetterOfName === "u" ||
    lastLetterOfName === "w"
  ) {
    return "Good Name";
  }
  return "Bad Name";
}
console.log("*****************-> Problem-2 Outputs ->************");
console.log(checkName("faRHanMw"));
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

//Solution of Problem -3
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array!";
  }
  const arrayOfNums = [];
  for (element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      arrayOfNums.push(element);
    }
  }
  return arrayOfNums;
}
console.log("*****************-> Problem-3 Outputs ->************");
console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined]));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

//Solution of Problem -4
function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;
  if (!name || !siteName || birthYear <= 999) {
    return "Invalid!";
  }
  const splitedSiteName = siteName.split("");
  const upperCaseLetter = splitedSiteName[0].toUpperCase();
  splitedSiteName.shift();
  splitedSiteName.unshift(upperCaseLetter);
  const modifiedSiteName = splitedSiteName.join("");
  const password = modifiedSiteName + "#" + name + "@" + birthYear;
  return password;
}
console.log("*****************-> Problem-4 Outputs ->************");
console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "facebook" }));
console.log(password({ name: "rahat", birthYear: 900, siteName: "twitter" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
//Solution of Problem -5
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid Input!";
  }
  let totalSavings = 0;
  for (payment of arr) {
    if (typeof payment !== "number") {
      return "Invalid Input";
    } else if (payment >= 3000) {
      const paymentAfterText = payment - (payment / 100) * 20;
      totalSavings += paymentAfterText;
    } else {
      totalSavings += payment;
    }
  }
  const savingsAfterLivingCost = totalSavings - livingCost;
  if (savingsAfterLivingCost < 0) {
    return "earn more";
  }
  return savingsAfterLivingCost;
}
console.log("*****************-> Problem-5 Outputs ->************");
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
/*******************************************************************************************/
