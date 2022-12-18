import {Animal} from './Animal.js';

export class Ave extends Animal {
    constructor(_nome, _especie, _altura, _peso, _data){
    super(_nome, _especie, _altura, _peso, _data);
    }

   voar(){
    console.log("A ave " + this.getNome() + " da especie " + this.getEspecie() + " voou")      ;
}
    baterAsas(){
        console.log("A ave " + this.getNome() + " da especie " + this.getEspecie + " bateu as asas");
    }

    piar(){
        console.log("A ave " + this.getNome() + " da especie "+ this.getEspecie + " piou");
    }
}