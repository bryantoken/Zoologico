import {Animal} from './Animal.js';

export class Felino extends Animal {
    constructor(_nome, _especie, _altura, _peso, _data){
    super(_nome, _especie, _altura, _peso, _data);
    }

    miar(){
        console.log("O felino " + this.getNome() + " da especie " + this.getEspecie + " miou");
    }

    ronronar(){
        console.log("O felino " + this.getNome() +" da especie " + this.getEspecie +  " ronronou");
    }

    higienizar(){
        console.log("O felino " + this.getNome() +" da especie "+ this.getEspecie +  " higienizou");
    }
}