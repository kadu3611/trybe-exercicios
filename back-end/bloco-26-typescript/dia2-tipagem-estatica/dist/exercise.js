"use strict";
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["white"] = 1] = "white";
    Color[Color["red"] = 2] = "red";
    Color[Color["silver"] = 3] = "silver";
})(Color || (Color = {}));
;
var Doors;
(function (Doors) {
    Doors[Doors["Porta_1"] = 1] = "Porta_1";
    Doors[Doors["Porta_2"] = 2] = "Porta_2";
    Doors[Doors["Porta_3"] = 3] = "Porta_3";
    Doors[Doors["Porta_4"] = 4] = "Porta_4";
})(Doors || (Doors = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzina BIP BIP');
    }
    turnOff() {
        console.log('Carro desliga');
    }
    turnOn() {
        console.log('Carro liga');
    }
    openTheDoor(door) {
        console.log(`Abrindo a porta ${door}.`);
    }
}
const chamaCar = new Car('Chevrolet', Color.black, 1);
console.log(chamaCar.turnOn());
