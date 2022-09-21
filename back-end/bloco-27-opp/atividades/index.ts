// matrícula, nome, 4 notas de prova, 2 notas de trabalho
import Person from './Person';
import Employe from './Employe';

class Escola extends Person {
    private _matricula: number;
    private _provas: number[];
    private _trabalhos: number[]

    constructor(m: number, n: string){
        super(n);
        this._matricula = m;
        this._provas = [];
        this._trabalhos= []

    } 
    set novaMatricula(matricula: number){
        this._matricula = matricula;
    }

    get novaMatricula(){
        return this._matricula;
    }

    set novaNome(nome: string){
        this.name = nome;
    }

    get novaNome(){
        return this.name;
    }

    set notaProva(prova: number[]){
        if(prova.length > 2){
            throw new Error('Somente 2 notas')
        };
        this._provas = prova;
    }

    get notaProva(){
        return this._provas;
    }

    set notaTrabalho(trabalho: number[]){
        if(trabalho.length > 2){
            throw new Error('Somente 2 notas')
        };
        this._trabalhos = trabalho;
    }

    get notaTrabalho(){
        return this._trabalhos;
    }

    sumNota(): number{
        const mapSoma = [...this._provas, ...this._trabalhos]
        .reduce((preElement, element) => {
            const soma: number = preElement + element;
            return soma;
        }, 0)
        return mapSoma;
    }


    mediaNota(): number{
        const numeroNotas = [...this._provas, ...this._trabalhos];
        return this.sumNota()/numeroNotas.length;
        
    }
}


const Carlos = new Escola(1,'Carlos');

Carlos.notaProva = [1,2];
Carlos.notaTrabalho = [1,2];
console.log(Carlos);
console.log(Carlos.sumNota(), 'Soma');
console.log(Carlos.mediaNota(), 'Média de Notas');

const maria = new Escola(1, 'Maria da Consolação');
const luiza = new Escola(2, 'Luiza Andrade');
const newPerson = new Employe ('Carlos Eduardo', new Date('1995/02/10'), 10000)

console.log(maria);
console.log(luiza);
console.log(newPerson, 'newPerson');








