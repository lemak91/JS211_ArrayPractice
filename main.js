let cars = ["Ford", "Subaru", "Toyota", "Tesla"];
console.log(cars.length);

let moreCars = ["BMW", "Jeep", "Chevrolet", "Honda"];

let totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join();
console.log(stringOfCars);

let carsFromString = stringOfCars.split();
console.log(carsFromString);

let carsInReverse = totalCars.reverse().sort();
console.log(carsInReverse);

const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];
const reptiles = pets.slice(4, 6);
console.log(reptiles);
console.log(pets);

let removedReptiles = pets.splice(4, 2, "hamster");
console.log(removedReptiles);
console.log(pets);

let removedPet = pets.pop(6);
console.log(removedPet);
console.log(pets);

pets.push(removedPet);
console.log(pets);

pets.shift(0);
console.log(pets);

pets.unshift("turtle");
console.log(pets);

const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = (num, index , arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[index] = num + 2;
  }
};

numbers.forEach(addTwo);

console.log(numbers);

// const addTwo = []
// numbers.forEach(increaseNumBy2)

// function increaseNumBy2(num) {
//     addTwo.push(num + 2)
// }
// console.log(addTwo)

// const increaseNumberBy2 = (num) => {
//     num.forEach(n => n + 2)
// }

// console.log(numbers))
