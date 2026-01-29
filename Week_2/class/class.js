class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let myAge = 24;
        console.log(myAge);
    }
}
const myCar = new Car("Ford", 2024);
console.log(myCar);