class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    ola(){
        console.log(`Olá ${this.nome}`);
    }

}

let p = new Pessoa('Ana', 25)
p.ola()