Feature: LiquidacionDeBoletasDeRecojo
Yo como Administrador deseo LiquidacionDeBoletasDeRecojo

@LiquidacionDeBoletasDeRecojo @FlujoBasico
Scenario Outline: LiquidacionDeBoletasDeRecojo
Given Ingreso a Liquidacion De Boletas De Recojo con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso Periodo Inicial "<PeriodoInicial>" y Periodo Final "<PeriodoFinal>"
Then Muestra el mensaje Se aprobaron las boletas de recojo satisfactoriamente

Examples:
  |Usuario      | Password | PeriodoInicial | PeriodoFinal | 
  |PRUEBAAUTO   | BELCORP  | 201808	        | 201913      |