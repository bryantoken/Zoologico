import {Animal} from './Animal.js';

export class Canino extends Animal {
    constructor(_nome, _especie, _altura, _peso, _data){
    super(_nome, _especie, _altura, _peso, _data);
    }

    farejar(){
        return "O canino " + this.getNome() + " da especie " + this.getEspecie() + " farejou";
    }

    grunhir(){
        return "O canino " + this.getNome() + " da especie " + this.getEspecie() + " grunhiu";
    }

    uivar(){
        return "O canino " + this.getNome() +" da especie "+ this.getEspecie() +  " uivou";
    }
}