# Modelado de Ejercitos

#Ejercitos

● Los ejércitos poseen una cantidad inicial de piqueros, arqueros y caballeros
dependiendo de la civilización. Pueden coexistir muchos ejércitos de la misma
civilización.
● También poseen 1000 monedas de oro al momento de la creación.
● Cada ejército posee un historial de todas las batallas en las que participó.

# Unidades

Hay tres tipos de unidades:
● Piquero
● Arquero
● Caballero

Cada unidad posee puntos de fuerza, según la siguiente tabla:

Unidad            Puntos aportados
Piquero           5 puntos
Arquero           10 puntos
Caballero         20 puntos

La cantidad inicial de unidades es determinada por la siguiente tabla:

Civilización    Piquero    Arqueros    Caballeros
Chinos            2           25           2
Ingleses          10          10           10
Bizantinos        5           8            15

# Entrenamiento

Cada unidad se puede entrenar, esto tiene un costo en monedas de oro y un beneficio en puntos de fuerza que se le suman a la unidad.

Unidad    Puntos obtenidos    Costo del entrenamiento
Piquero        3 puntos                10
Arquero        7 puntos                20
Caballero      10 puntos               30

# Transformacion

Cada unidad se puede transformar, a un costo, para convertirse en otra, según la siguiente tabla:

Unidad original    Unidad a la que se convierte    Costo (monedas de oro)
Piquero                      Arquero                        30
Arquero                      Caballero                      40
Caballero              No se puede entrenar                  -

# Batallas

Un ejército puede atacar a otro en cualquier momento, incluso si son de la misma
civilización. Al hacerlo el ganador de la batalla es simplemente el ejército que tiene más puntos. Las consecuencias de la batalla son las siguientes:
● Ejército perdedor: Pierde las dos unidades con mayor puntaje.
● Ejército ganador: Obtiene 100 unidades de oro.
● En caso de empate: Ambos jugadores pierden alguna unidad (queda a criterio del
programador).



# Diagrama de Clases
![image](https://github.com/facubarneche/modeladoDeEjercitos/assets/70295509/22ecf4ab-c8a9-42bc-91a6-ed661772c72b)

Link Diagrama de Clases: https://drive.google.com/file/d/1sC2T2G2_i1MTa_rSIZReNkqmZreC7jEn/view

