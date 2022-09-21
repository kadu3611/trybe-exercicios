export default abstract class Person {
    name: string;

    constructor(n: string){
        this.name = n;
    }

    private validatName(value: string){
        if(value.length < 3){
            throw new Error("Name invalid");
        }
    }

    get nameEt(): string{
        return this.name;

    }

    set nameEt(value: string) {
        this.validatName(value);
        this.name = value;
    }




    
    }
