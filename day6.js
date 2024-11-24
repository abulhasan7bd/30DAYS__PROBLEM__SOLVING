const possibleBonus = (a, b) => {
  let distance = b - a; // find distance
  return distance >= 1 && distance <= 6;
};
console.log(possibleBonus(3, 5));
console.log(possibleBonus(1, 9));
