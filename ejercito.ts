
class Ejercito {
	tropas: Unidad[];
	historialBatallas: { rival: Ejercito, resultado: ResultadoBatalla }[] = [];    
	monedasOro: number = 1000;

	constructor({ tropas }: Civilizacion){
		this.tropas = tropas;
	}

	//Validación a la hora de realizar un pago
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

	//Elimina la ultima unidad de las tropas
	private eliminarUltimaUnidad = (ejercito: Ejercito) => {
		ejercito.tropas.pop();
	}

	//Obtiene la suma total de los puntos de fuerza de las tropas
	private totalPuntosTropa = (): number => this.tropas.reduce( (acc, elem) => acc + elem.puntosDeFuerza, 0);

	//Si hay un ejercito vencedor ejecuta la logica de negocio
	private batallaConVencedor = (ejercitoGanador: Ejercito, ejercitoPerdedor: Ejercito): void => {
		ejercitoGanador.incrementarOro(100);
		ejercitoPerdedor.tropas.sort((a, b) => b.puntosDeFuerza - a.puntosDeFuerza).slice(0, 2);
	}

	//En caso de que la batalla termine empatada realiza la logica a cargo del programador
	private batallaEmpatada = (ejercitoDefensor: Ejercito): void => {
		this.eliminarUltimaUnidad(this);
		this.eliminarUltimaUnidad(ejercitoDefensor);
	}

	//Obtiene como respuesta un numero positivo si es victoria, 0 empate o negativo en caso de derrota
	private obtenerResultadoBatalla = (ejercitoDefensor: Ejercito): number => this.totalPuntosTropa() - ejercitoDefensor.totalPuntosTropa();
	
	//Instancia un objeto con una pequeña información respecto a la batalla para mantener un historial
	private obtenerEstadisticasBatalla = (ejercitoRival: Ejercito, resultado: ResultadoBatalla): void => {
		this.historialBatallas.push({ rival: ejercitoRival, resultado: resultado });
		ejercitoRival.historialBatallas.push({ rival: this,	resultado: resultado });
	}

	eliminarUnidad = (unidad: Unidad): void => {
		this.tropas = this.tropas.filter(elem => elem !== unidad);
	}

	//Valida si se puede pagar el entrenamiento y ejecuta la logica
	entrenarUnidad = (unidad: Unidad): void => {
		if(this.puedeRealizarElPago(unidad.costoEntrenamiento)){
			this.decrementarOro(unidad.costoEntrenamiento);
			unidad.entrenar();
		}
	}

	//Valida si se puede pagar la transformacion y ejecuta la logica
	transformarUnidad = (unidad: Unidad): void => {
		if(this.puedeRealizarElPago(unidad.costoTransformacion)){
			this.decrementarOro(unidad.costoTransformacion);
			this.agregarUnidad(unidad.transformar())
		}
	}

	//Ejecuta la logica de negocio en caso de victoria, derrota o empate
	atacar = (ejercitoDefensor: Ejercito): void => {
		if(this.obtenerResultadoBatalla(ejercitoDefensor) > 0 ){
			this.batallaConVencedor(this, ejercitoDefensor);
			this.obtenerEstadisticasBatalla(ejercitoDefensor, "Victoria");
		}else if(this.obtenerResultadoBatalla(ejercitoDefensor) < 0 ){
			this.batallaConVencedor(ejercitoDefensor, this);
			this.obtenerEstadisticasBatalla(ejercitoDefensor, "Derrota");
		}else{
			this.batallaEmpatada(ejercitoDefensor);
			this.obtenerEstadisticasBatalla(ejercitoDefensor, "Empate");
		}
	}
}

//Type para persistir el resultado de la batalla en el array del historial
type ResultadoBatalla = "Victoria" | "Empate" | "Derrota";