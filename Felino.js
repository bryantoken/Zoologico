import {Animal} from './Animal.js';

export class Felino extends Animal {
    constructor(_nome, _especie, _altura, _peso, _data){
    super(_nome, _especie, _altura, _peso, _data);
    }

    miar(){
        return "O felino " + this.getNome() + " da especie " + this.getEspecie() + " miou";
    }

    ronronar(){
        return "O felino " + this.getNome() +" da especie " + this.getEspecie() +  " ronronou";
    }

    higienizar(){
        return "O felino " + this.getNome() +" da especie "+ this.getEspecie() +  " higienizou";
    }
}