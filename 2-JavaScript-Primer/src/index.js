let hatPrice = 100;
console.log(`Hate Price: ${hatPrice}`)
let bootsPrice = "100";
console.log(`Boots Price: ${bootsPrice}`)

if (hatPrice == bootsPrice) { // JS uses type coercion here due to the == operator. To prevent coercion, use === (strict comparison operator)
    console.log("Prices are the same.");
} else {
    console.log("Prices are different.");
}

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`);
// Values were concatenated rather than added, since bootsprice is a string, 
// and during addition operations numbers are converted to strings if any member of the operation is a string

let myVariable = "Adam";
console.log(`Type of myVariable: ${typeof myVariable}`)

myVariable = 100;
console.log(`New type of myVariable: ${typeof myVariable}`)

// Explicit Type Coercion (Applying a default value)
let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`)

function restParamPlay(...numbers) { // Print the sum of each number and it's succeeding neighbor, unless it is the final number in which case add it to the beginning of the list.
    numbers.forEach(number => {
        if (Number.isNaN(Number(number))) { // This step can prune any non-number arguments. Could also just use a comparison of typeof... or just use Typescript
            numbers.splice(numbers.indexOf(number), 1)
        }
    });

    numbers.forEach(number => {
        if (numbers.indexOf(number) !== numbers.length - 1) {
            console.log(number + numbers[numbers.indexOf(number) + 1])
        } else {
            console.log(number + numbers[0])
        }
    });
};

// Bringing a function like this into TS, you have to overload several complaints of `any` typing before this will work, and at that point you've basically written Javascript with extra steps.

restParamPlay(1, 2, 3, 4, 5, 6, 7, 8, 9, "Steve", false, 12.98);
