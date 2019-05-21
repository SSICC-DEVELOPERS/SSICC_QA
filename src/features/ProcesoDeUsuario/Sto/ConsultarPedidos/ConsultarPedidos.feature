Feature: ConsultarPedidos
Yo como Administrador deseo ConsultarPedidos

@ConsultarPedidos @FlujoBasico
Scenario Outline: ConsultarPedidos
Given Ingreso a Consultar Pedidos con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso "<Periodo>" y "<CodigoCliente>" clic en buscar
Then Validar GP5 "<GP5>"

Examples:
    |Usuario      | Password   | Periodo  | CodigoCliente| GP5|
    |PRUEBAAUTO   | BELCORP    | 201908   | 007297319    |1   |