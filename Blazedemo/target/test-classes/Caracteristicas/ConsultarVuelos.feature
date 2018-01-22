# language: es
# encoding: iso-8859-1
## Permite al usuario consultar los vuelos disponibles
Característica: Consultar vuelos
  Como usuario del aplicativo quiero consultar los vuelos disponibles de acuerdo a la ciudad 
  de partida y la ciudad de destino seleccionada.

  @SmokeTest @Regresión
  Escenario: el usuario selecciona una ciudad de partida y una ciudad de destino
    Dado que he seleccionado una ciudad de partida
    Y he seleccionado una ciudad de destino
    Cuando presione el botón Buscar vuelos
    Entonces debería visualizar los vuelos disponibles para las ciudades seleccionadas
