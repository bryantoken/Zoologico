export class Animal{
    #nome
    #especie
    #altura
    #peso
    #data
    constructor(_nome, _especie, _altura, _peso, _data){
           
            this.#nome = _nome;
            this.#especie = _especie;
            this.#altura = _altura;
            this.#peso = _peso;
            this.#data = _data;
    }

    getNome(){
        return this.#nome;
    }

    setNome(novoNome){
        this.#nome = novoNome;
    }

    getEspecie(){
        return this.#especie;
    }
    
    setEspecie(novaEspecie){
        this.#especie = novaEspecie;
    }

    getAltura(){
        return this.#altura;
    }

    setAltura(novaAltura){
        this.#altura = novaAltura;
    }

    getPeso(){
        return this.#peso;
    }

    setPeso(novoPeso){
        this.#peso = novoPeso;
    }

    getData(){
        return this.#data;
    }

    setData(novaData){
        this.#data = novaData;
    }

    comer(comida){
        console.log(this.#nome + " comeu: " + comida)
    }

    andar(passos){
        console.log(this.#nome + " andou: " + passos)
    }   

}