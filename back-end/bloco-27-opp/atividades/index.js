var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// matrícula, nome, 4 notas de prova, 2 notas de trabalho
var Escola = /** @class */ (function () {
    function Escola(m, n) {
        this._matricula = m;
        this._nome = n;
        this._provas = [];
        this._trabalhos = [];
    }
    Object.defineProperty(Escola.prototype, "novaMatricula", {
        get: function () {
            return this._matricula;
        },
        set: function (matricula) {
            this._matricula = matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escola.prototype, "novaNome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escola.prototype, "notaProva", {
        get: function () {
            return this._provas;
        },
        set: function (prova) {
            if (prova.length > 2) {
                throw new Error('Somente 2 notas');
            }
            ;
            this._provas = prova;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escola.prototype, "notaTrabalho", {
        get: function () {
            return this._trabalhos;
        },
        set: function (trabalho) {
            if (trabalho.length > 2) {
                throw new Error('Somente 2 notas');
            }
            ;
            this._trabalhos = trabalho;
        },
        enumerable: false,
        configurable: true
    });
    Escola.prototype.sumNota = function () {
        var mapSoma = __spreadArray(__spreadArray([], this._provas, true), this._trabalhos, true).reduce(function (preElement, element) {
            var soma = preElement + element;
            return soma;
        }, 0);
        return mapSoma;
    };
    Escola.prototype.mediaNota = function () {
        var numeroNotas = __spreadArray(__spreadArray([], this._provas, true), this._trabalhos, true);
        return this.sumNota() / numeroNotas.length;
    };
    return Escola;
}());
var p1 = new Escola('1', 'Carlos');
p1.notaProva = [1, 2];
p1.notaTrabalho = [1, 2];
console.log(p1);
console.log(p1.sumNota(), 'Soma');
console.log(p1.mediaNota(), 'Média de Notas');
