Feature: ModificacionDeOferta
Yo como Administrador deseo ModificacionDeOferta

@ModificacionDeOferta @FlujoBasico
Scenario Outline: ModificacionDeOferta
Given Ingreso a Mantenimmiento de Oferta con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso Campania "<Campania>" y CUV "<CUV>"
Then Muestra "<PContable>" y el mensaje Producto actualizado satisfactoriamente

Examples:
  |Usuario      | Password | Campania | CUV   | PContable |
  |PRUEBAAUTO   | BELCORP  | 201907   | 29441 | 100       | 
  |PRUEBAAUTO   | BELCORP  | 201908   | 29366 | 100       | 