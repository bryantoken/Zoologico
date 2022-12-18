import {Canino} from './Canino.js';
import {Felino} from './Felino.js';
import {Ave} from './Ave.js';

const novoFelino = new Felino("Pitu", "Felinus Australius", 0.70, 26, new Date(2013, 11, 19));
const novoCanino = new Canino("Brazilo", "Caninus Pelusus", 0.50, 43, new Date(2020, 2, 12));
const novaAve = new Ave("Galete", "Galinus Pretun", 0.60, 23, new Date(2022, 12, 20));

console.log(novoCanino.farejar());
console.log(novoCanino.grunhir());
console.log(novoCanino.uivar());

console.log(novoFelino.miar());
console.log(novoFelino.higienizar());
console.log(novoFelino.ronronar());

console.log(novaAve.voar());
console.log(novaAve.baterAsas());
console.log(novaAve.piar());


doEat(novaAve);
doWalk(novaAve);

function doEat(animal){
    console.log("O animal " + animal.getNome() + " da especie " + animal.getEspecie() + " " + animal.comer());
}

function doWalk(animal){
    console.log("O animal " + animal.getNome() + " da especie " + animal.getEspecie() + " " + animal.comer());
}
