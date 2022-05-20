let bool1 = 5 > 2;
console.log(bool1);

let bool = 5 > 10;
console.log(bool);

let bool3 = 1 === 1;
console.log(bool3);

let bool4 = 1 !== 2;
console.log(bool4);

let bool5 = "Wiktor" === "Wiktor";
console.log(bool5);

let isBiggerThan10 = (number) => {
    if(number > 10) {
        console.log("Liczba jest wieksza od 10");
    }
    else {
        console.log("Liczba nie jest wieksza od 10");
    }
};

isBiggerThan10(11); 