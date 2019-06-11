Feature: RegistroReclamos
Yo como Administrador deseo RegistroReclamos

@RegistroReclamos @FlujoBasico
Scenario Outline: RegistroReclamos
Given Ingreso a Registro Reclamos con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso Codigo Consultora "<CodigoConsultora>" con CDR "<NumeroCDR>" "<CodigoVenta>" "<Cantidad>"
Then Muestra el mensaje Reclamo registrado satisfactoriamente El CDR se encuentra en GP1

Examples:
  |Usuario      | Password   | CodigoConsultora| NumeroCDR | CodigoVenta | Cantidad |
  |PRUEBAAUTO   | BELCORP    | 007527764       | 300124    | 11245       | 1        |   