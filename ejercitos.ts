
class Ejercito {
	tropas: Unidad[];

	constructor({ tropas }: Civilizacion){
		this.tropas = tropas;
	}

	historialBatallas = [];    
	monedasOro: number = 1;

	obtenerCantMonedasOro = (): number => this.monedasOro;

	puedeRealizarElPago = (costoAPagar: number): boolean => this.monedasOro - costoAPagar >= 0;

	pagarConMonedasOro = (costoAPagar: number): void => {
		this.monedasOro -= costoAPagar;
	}

	private agregarUnidad = (unidad: Unidad): void => {
		this.tropas.push(unidad);
	}

	eliminarUnidad = (unidad: Unidad): void => {
		this.tropas = this.tropas.filter(elem => elem !== unidad);
	}

	entrenarUnidad = (unidad: Unidad): void => {
		if(this.puedeRealizarElPago(unidad.costoEntrenamiento)){
			this.pagarConMonedasOro(unidad.costoEntrenamiento);
			unidad.entrenar();
		}
	}

	transformarUnidad = (unidad: Unidad): void => {
		if(this.puedeRealizarElPago(unidad.costoTransformacion)){
			this.pagarConMonedasOro(unidad.costoTransformacion);
			this.agregarUnidad(unidad.transformar())
		}
	}
}
