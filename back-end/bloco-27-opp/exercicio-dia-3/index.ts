abstract class Character{
    abstract talk(): void;
    abstract specialMove(): void;
}

class MeleeCharacter extends Character{
     constructor(private _talk: string, private _specialMove: string ){
        super();
     }

     talk(): void{
        console.log(`Esse é o talk ${this._talk}`);
        
     }

     specialMove(): void{
        console.log(`Esse é o specialMove ${this._specialMove}`);
        
     }
}

class LongRangeCharacter extends Character {
    constructor(private _talk: string, private _specialMove: string ){
        super();
     }

     talk(): void{
        console.log(`Esse é o talk do LongRangeCharacter ${this._talk}`);
        
     }

     specialMove(): void{
        console.log(`Esse é o specialMove do LongRangeCharacter ${this._specialMove}`);
        
     }

}

function caracter (character: Character){

    character.specialMove();
    character.talk();

 }

 const p1 = new MeleeCharacter('Fala', 'Comigo');
 const p2 = new LongRangeCharacter('oi sou o talk', 'oi sou o specie');

 caracter(p1);
 caracter(p2);

