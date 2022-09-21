export default abstract class BirthDate{
    birthDate: Date;

    constructor(b: Date){
        this.birthDate = b;
    }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
      }

    private validatBirth(value: Date){
        if(value.getTime() > new Date().getTime()){
            throw new Error('Error')
        }
        if (BirthDate.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    }

    get birthEt(): Date{
        return this.birthDate;

    }

    set birthEt(value: Date) {
        this.validatBirth(value);
        this.birthDate = value;
    }
}