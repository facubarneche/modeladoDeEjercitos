abstract class Civilizacion {
	tropas: Unidad[];
  
	constructor(cantPiqueros: number, cantArqueros: number, cantCaballeros: number) {
		const piquerosArr = new Array(cantPiqueros).fill(new Piquero());
		const arquerosArr = new Array(cantArqueros).fill(new Arquero());
		const caballerosArr = new Array(cantCaballeros).fill(new Caballero());

		this.tropas = [...piquerosArr, ...arquerosArr, ...caballerosArr];
	}
}
  
class CivilizacionChina extends Civilizacion {
	constructor(){
		super(2, 25, 2);
	}
}
class CivilizacionInglesa extends Civilizacion{
	constructor(){
		super(10, 10, 10);
	}
}
class CivilizacionBizantina extends Civilizacion{
	constructor(){
		super(5, 8, 15);
	}
}