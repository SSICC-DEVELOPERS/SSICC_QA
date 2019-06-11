Feature: MantenimientoMav
Yo como Administrador deseo MantenimientoMav

@MantenimientoMav @FlujoBasico
Scenario Outline: MantenimientoMav
Given Ingreso a Mantenimmiento MAV con el Usuario "<Usuario>" y Contrasena "<Password>"
When Ingreso "<Campania>" "<UnidadesEstimadas>" "<Producto>" "<Precio>" "<Observaciones>" "<EdadDesde>" "<EdadHasta>"
Then Muestra el mensaje La configuración MAV ha sido creado satisfactoriamente

Examples:
  |Usuario      | Password | Campania |  UnidadesEstimadas |  Producto | Precio | Observaciones	  	| EdadDesde | EdadHasta | 
  |PRUEBAAUTO   | BELCORP  | 201908	  | 500					       | 400081838 | 30  	  | MAV SIN COMISION  | 40  	  	| 50	    	| 
  |PRUEBAAUTO   | BELCORP  | 201908	  | 500					       | 400081838 | 30  	  | MAV SIN COMISION  | 40  	  	| 50	    	| 