Feature: DatosGenerales
Yo como Administrador deseo consultar los DatosGenerales

@DatosGenerales @FlujoBasico
Scenario Outline: DatosGenerales
Given Ingreso a Datos Generales con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso al menu
And Ingreso "<CodigoConsultora>"
Then se verifican los Datos Generales

Examples:
  |Usuario      | Password   | CodigoConsultora|
  |PRUEBAAUTO   | BELCORP    | 044176467       |
  |PRUEBAAUTO   | BELCORP    | 007297319       |