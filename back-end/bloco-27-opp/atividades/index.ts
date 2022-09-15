// matrícula, nome, 4 notas de prova, 2 notas de trabalho
class Escola {
    private _matricula: string;
    private _nome: string;
    private _provas: number[];
    private _trabalhos: number[]

    constructor(m: string, n: string){
            this._matricula = m;
            this._nome = n;
            this._provas = [];
            this._trabalhos= []

    } 
    set novaMatricula(matricula: string){
        this._matricula = matricula;
    }

    get novaMatricula(){
        return this._matricula;
    }

    set novaNome(nome: string){
        this._nome = nome;
    }

    get novaNome(){
        return this._nome;
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


const p1 = new Escola('1','Carlos', );

p1.notaProva = [1,2];
p1.notaTrabalho = [1,2];
console.log(p1);
console.log(p1.sumNota(), 'Soma');
console.log(p1.mediaNota(), 'Média de Notas');



