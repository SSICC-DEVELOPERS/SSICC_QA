Feature: ConsultaCuentaCorriente
Yo como Administrador deseo ConsultaCuentaCorriente

@ConsultaCuentaCorriente @FlujoBasico
Scenario Outline: ConsultaCuentaCorriente
Given Ingreso a Consulta Cuenta Corriente con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso Codigo "<CodigoConsultora>"
And Selecciona la opcion consulta cuenta corriente
Then Se verifica ConsultaCuentaCorriente

Examples:
    |Usuario      | Password   | CodigoConsultora  | 
    |PRUEBAAUTO   | BELCORP    | 044176467         | 
    |PRUEBAAUTO   | BELCORP    | 007297319         |