/*
Task1
const car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2020,
  averageSpeed: 80
};

function displayCarInfo(car) {
  console.log(`Виробник: ${car.manufacturer}`);
  console.log(`Модель: ${car.model}`);
  console.log(`Рік випуску: ${car.year}`);
  console.log(`Середня швидкість: ${car.averageSpeed} км/год`);
}

function calculateTravelTime(distance, car) {
  const speed = car.averageSpeed;
  let time = distance / speed;

  const breaks = Math.floor(time / 4);
  time += breaks;

  return time;
}

displayCarInfo(car);

const distance = parseFloat(prompt("Введіть відстань в км:"));

if (!isNaN(distance) && distance > 0) {
  const travelTime = calculateTravelTime(distance, car);
  console.log(`Час необхідний для подолання ${distance} км: ${travelTime} годин`);
} else {
  console.log("Будь ласка, введіть коректне значення для відстані.");
}
*/

/*
Task 2
function createFraction(numerator, denominator) {
  return { numerator, denominator };
}

function addFractions(fraction1, fraction2) {
  const numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
  const denominator = fraction1.denominator * fraction2.denominator;
  return simplifyFraction(createFraction(numerator, denominator));
}

function subtractFractions(fraction1, fraction2) {
  const numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
  const denominator = fraction1.denominator * fraction2.denominator;
  return simplifyFraction(createFraction(numerator, denominator));
}

function multiplyFractions(fraction1, fraction2) {
  const numerator = fraction1.numerator * fraction2.numerator;
  const denominator = fraction1.denominator * fraction2.denominator;
  return simplifyFraction(createFraction(numerator, denominator));
}

function divideFractions(fraction1, fraction2) {
  const numerator = fraction1.numerator * fraction2.denominator;
  const denominator = fraction1.denominator * fraction2.numerator;
  return simplifyFraction(createFraction(numerator, denominator));
}

function simplifyFraction(fraction) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const commonDivisor = gcd(fraction.numerator, fraction.denominator);
  return createFraction(fraction.numerator / commonDivisor, fraction.denominator / commonDivisor);
}

const fraction1 = createFraction(3, 4);
const fraction2 = createFraction(5, 6);

console.log("Додавання дробів:");
console.log(addFractions(fraction1, fraction2));

console.log("Віднімання дробів:");
console.log(subtractFractions(fraction1, fraction2));

console.log("Множення дробів:");
console.log(multiplyFractions(fraction1, fraction2));

console.log("Ділення дробів:");
console.log(divideFractions(fraction1, fraction2));
*/

/*function createTime(hours, minutes, seconds) {
  return { hours, minutes, seconds };
}

function displayTime(time) {
  const padZero = (num) => num.toString().padStart(2, '0');
  console.log(`${padZero(time.hours)}:${padZero(time.minutes)}:${padZero(time.seconds)}`);
}

function addSeconds(time, seconds) {
  time.seconds += seconds;

  while (time.seconds >= 60) {
    time.seconds -= 60;
    time.minutes += 1;
  }

  while (time.minutes >= 60) {
    time.minutes -= 60;
    time.hours += 1;
  }

  time.hours = time.hours % 24;

  return time;
}

function addMinutes(time, minutes) {
  return addSeconds(time, minutes * 60);
}

function addHours(time, hours) {
  return addSeconds(time, hours * 3600);
}

let currentTime = createTime(20, 30, 45);

console.log("Початковий час:");
displayTime(currentTime);

console.log("\nДодаємо 30 секунд:");
currentTime = addSeconds(currentTime, 30);
displayTime(currentTime);

console.log("\nДодаємо 40 хвилин:");
currentTime = addMinutes(currentTime, 40);
displayTime(currentTime);

console.log("\nДодаємо 5 годин:");
currentTime = addHours(currentTime, 5);
displayTime(currentTime);*/
