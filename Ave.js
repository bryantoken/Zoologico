import {Animal} from './Animal.js';

export class Ave extends Animal {
    constructor(_nome, _especie, _altura, _peso, _data){
    super(_nome, _especie, _altura, _peso, _data);
    }

   voar(){
    return "A ave " + this.getNome() + " da especie " + this.getEspecie() + " voou" ;
}
    baterAsas(){
        return "A ave " + this.getNome() + " da especie " + this.getEspecie() + " bateu as asas";
    }

    piar(){

        return "A ave " + this.getNome() + " da especie "+ this.getEspecie() + " piou";
    }
}