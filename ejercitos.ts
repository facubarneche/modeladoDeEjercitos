
class Ejercito {
	tropas: Unidad[];
	historialBatallas: any[] = [];    
	monedasOro: number = 1;

	constructor({ tropas }: Civilizacion){
		this.tropas = tropas;
	}

	private puedeRealizarElPago = (costoAPagar: number): boolean => this.monedasOro - costoAPagar >= 0;
	
	private incrementarOro = (ingreso: number): void => {
		this.monedasOro += ingreso;
	}
	private decrementarOro = (costoAPagar: number): void => {
		this.monedasOro -= costoAPagar;
	}
	
	private agregarUnidad = (unidad: Unidad): void => {
		this.tropas.push(unidad);
	}

	private perderUltimaUnidad = (ejercito: Ejercito) => {
		ejercito.tropas.pop();
	}

	private totalPuntosTropa = (ejercito: Ejercito): number => ejercito.tropas.reduce( (acc, elem) => acc + elem.puntosDeFuerza, 0);

	private BatallaConVencedor = (ejercitoGanador: Ejercito, ejercitoPerdedor: Ejercito): void => {
		ejercitoGanador.incrementarOro(100);
		ejercitoPerdedor.tropas.sort((a, b) => b.puntosDeFuerza - a.puntosDeFuerza).slice(0, 2);
	}

	private batallaEmpatada = (ejercitoDefensor: Ejercito): void => {
		this.perderUltimaUnidad(this);
		this.perderUltimaUnidad(ejercitoDefensor);
	}

	private obtenerResultadoBatalla = (ejercitoDefensor: Ejercito): number => this.totalPuntosTropa(this) - this.totalPuntosTropa(ejercitoDefensor);
	
	private obtenerEstadisticasBatalla = (ejercitoRival: Ejercito, resultado: ResultadoBatalla): void => {
		this.historialBatallas.push({ rival: ejercitoRival, resultado: resultado });
		ejercitoRival.historialBatallas.push({ rival: this,	resultado: resultado });
	}

	eliminarUnidad = (unidad: Unidad): void => {
		this.tropas = this.tropas.filter(elem => elem !== unidad);
	}

	entrenarUnidad = (unidad: Unidad): void => {
		if(this.puedeRealizarElPago(unidad.costoEntrenamiento)){
			this.decrementarOro(unidad.costoEntrenamiento);
			unidad.entrenar();
		}
	}

	transformarUnidad = (unidad: Unidad): void => {
		if(this.puedeRealizarElPago(unidad.costoTransformacion)){
			this.decrementarOro(unidad.costoTransformacion);
			this.agregarUnidad(unidad.transformar())
		}
	}

	atacar = (ejercitoDefensor: Ejercito): void => {
		if(this.obtenerResultadoBatalla(ejercitoDefensor) > 0 ){
			this.BatallaConVencedor(this, ejercitoDefensor);
			this.obtenerEstadisticasBatalla(ejercitoDefensor, "Victoria");
		}else if(this.obtenerResultadoBatalla(ejercitoDefensor) < 0 ){
			this.BatallaConVencedor(ejercitoDefensor, this);
			this.obtenerEstadisticasBatalla(ejercitoDefensor, "Derrota");
		}else{
			this.batallaEmpatada(ejercitoDefensor);
			this.obtenerEstadisticasBatalla(ejercitoDefensor, "Empate");
		}
	}
}

type ResultadoBatalla = "Victoria" | "Empate" | "Derrota";