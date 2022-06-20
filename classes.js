class Vehicle {
    constructor(ownerName) {
        this.brand = "hero";
        this.ownerName = ownerName;
    }
    speed= () => {
        console.log(`speed is: 45 km/hr of ${this.ownerName}`) ;
    }

}

class Car extends Vehicle{
    constructor(ownerName) {
        super(ownerName);

    }
}

let Kia = new Car("john");
Kia.speed();
console.log(Kia.brand);
console.log(Kia.ownerName);