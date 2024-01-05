abstract class Unidad {
	abstract puntosDeFuerza: number;
    abstract costoEntrenamiento: number;
    abstract puntosObtenidosEntrenamiento: number;
    abstract costoTransformacion: number;

    //Aumenta los puntos de fuerza respecto a los puntosObtenidosEntrenamiento de cada subclase
    entrenar = (): void => {
        this.puntosDeFuerza += this.puntosObtenidosEntrenamiento;
    };

    abstract transformar(): Unidad
}

class Piquero extends Unidad {
	puntosDeFuerza = 5;
    puntosObtenidosEntrenamiento = 3;
    costoEntrenamiento = 10;
    costoTransformacion = 30;

    //Devuelve su respectiva unidad a transformar 
    transformar = (): Unidad => new Arquero();
}

class Arquero extends Unidad {
    puntosDeFuerza = 10;
    puntosObtenidosEntrenamiento = 7;
    costoEntrenamiento = 20;
    costoTransformacion = 40;
     
    transformar = (): Unidad => new Caballero();
}


class Caballero extends Unidad {
    puntosDeFuerza = 20;
    puntosObtenidosEntrenamiento = 10;
    costoEntrenamiento = 30;
    costoTransformacion = 0;
    
    transformar = (): Unidad => this;
}