Feature: MantenimientoDeConcurso
Yo como Administrador deseo MantenimientoDeConcurso

@MantenimientoDeConcurso @FlujoBasico
Scenario Outline: MantenimientoDeConcurso
Given Ingreso a Mantenimmiento de Concurso con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso "<NombreConcurso>" "<CampaniaInicio>" "<CampaniaFinal>" "<CodigoProducto>" "<PuntajeMinimo>" "<PuntajeMaximo>"
Then Muestra el mensaje El Concurso ha sido creado satisfactoriamente

Examples:
  |Usuario      | Password | NombreConcurso | CampaniaInicio | CampaniaFinal| CodigoProducto| PuntajeMinimo| PuntajeMaximo| 
  |PRUEBAAUTO   | BELCORP  | RXP C03/C07  	| 201910         | 201910       | 200091328     | 20			     | 500	        | 