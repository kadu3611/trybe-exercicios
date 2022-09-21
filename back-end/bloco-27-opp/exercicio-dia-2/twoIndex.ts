class SuperClass {
    constructor(public isSuper: true){ }
        public sayHello() {
            console.log('Hello world');          
        }
    
}

class Subclass extends SuperClass{
   
}
const myFunc = (object: SuperClass) => {
    object.sayHello();
}

const superClass = new SuperClass(true);
const sub = new Subclass(true);

myFunc(superClass);
myFunc(sub);
