module.exports = function reverse (n) {
  if (n > 0) {
    let reversed = String(n).split("").reverse().join("");
      return +reversed;
  } else {
    let reversed = String(n).split("").reverse().slice(0, -1).join("");
      return +reversed;
  }
}

