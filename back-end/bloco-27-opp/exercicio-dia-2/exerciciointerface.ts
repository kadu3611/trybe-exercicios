interface Logger {
    log(param: string): void
}

class ConsoleLogger implements Logger {
    constructor(){

    }
    public log(param: string){
            console.log(param)
    }
}

class ConsoleLoggerTwo implements Logger {
    constructor(){

    }
    public log(param: string){
            console.log('Log 2', param)
    }
}