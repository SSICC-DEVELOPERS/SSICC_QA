Feature: GestiondeErroresdeValidacion
Yo como Administrador deseo GestiondeErroresdeValidacion

@GestiondeErroresdeValidacion @FlujoBasico
Scenario Outline: GestiondeErroresdeValidacion
Given Ingreso a Gestion de Errores de Validacion con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso los criterios de Ejecuccion de Proceso
Then Se realiza la aprobación de Resultados

Examples:
    |Usuario      | Password   | 
    |PRUEBAAUTO   | BELCORP    | 
   