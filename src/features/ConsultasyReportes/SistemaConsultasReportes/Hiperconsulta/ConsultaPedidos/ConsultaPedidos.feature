Feature: ConsultaPedidos
Yo como Administrador deseo ConsultaPedidos

@ConsultaPedidos @FlujoBasico
Scenario Outline: ConsultaPedidos
Given Ingreso a Consulta Pedidos con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso "<CodigoConsultora>"
And Selecciona la Opcion 
Then Se verifica ConsultaPedidos

Examples:
    |Usuario      | Password   | CodigoConsultora  | 
    |PRUEBAAUTO   | BELCORP    | 044176467         | 
    |PRUEBAAUTO   | BELCORP    | 007297319         |