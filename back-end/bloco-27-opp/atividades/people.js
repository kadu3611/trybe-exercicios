"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(n, b) {
        this.name = n;
        this.birthDate = b;
    }
    Object.defineProperty(Person.prototype, "nameEt", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.validatName(value);
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthEt", {
        get: function () {
            return this.birthDate;
        },
        set: function (value) {
            this.birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.validatName = function (value) {
        if (value.length < 3) {
            throw new Error("Name invalid");
        }
    };
    Person.prototype.validatBirth = function (value) {
    };
    return Person;
}());
exports.default = Person;
var testTime = '';
console.log('test');
