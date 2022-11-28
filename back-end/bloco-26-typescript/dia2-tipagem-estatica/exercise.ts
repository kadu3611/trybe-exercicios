
enum Color {
    black,
    white,
    red,
    silver,
};

enum Doors {
    Porta_1 = 1,
    Porta_2,
    Porta_3,
    Porta_4,
}

class Car {
    brand: string;
    color: Color;
    doors: number;

    constructor(brand: string, color: Color, doors: number ){

        this.brand = brand;
        this.color = color;
        this.doors = doors;

    }

    honk(): void{
        console.log('Buzina BIP BIP');
    }

    turnOff(): void{
        console.log('Carro desliga');
        
    }

    turnOn(): void{
        console.log('Carro liga');
        
    }

    openTheDoor(door: Doors): void {
        console.log(`Abrindo a porta ${door}.`);
      }
}

const chamaCar = new Car('Chevrolet', Color.black, 1)

console.log(chamaCar.turnOn());


