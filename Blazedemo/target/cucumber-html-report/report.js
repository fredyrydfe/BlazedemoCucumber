$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConsultarVuelos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    },
    {
      "line": 2,
      "value": "# encoding: iso-8859-1"
    },
    {
      "line": 3,
      "value": "## Permite al usuario consultar los vuelos disponibles"
    }
  ],
  "line": 4,
  "name": "Consultar vuelos",
  "description": "Como usuario del aplicativo quiero consultar los vuelos disponibles de acuerdo a la ciudad \r\nde partida y la ciudad de destino seleccionada.",
  "id": "consultar-vuelos",
  "keyword": "Característica"
});
formatter.before({
  "duration": 6411117502,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "el usuario selecciona una ciudad de partida y una ciudad de destino",
  "description": "",
  "id": "consultar-vuelos;el-usuario-selecciona-una-ciudad-de-partida-y-una-ciudad-de-destino",
  "type": "scenario",
  "keyword": "Escenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    },
    {
      "line": 8,
      "name": "@Regresión"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que he seleccionado una ciudad de partida",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "he seleccionado una ciudad de destino",
  "keyword": "Y "
});
formatter.step({
  "line": 12,
  "name": "presione el botón Buscar vuelos",
  "keyword": "Cuando "
});
formatter.step({
  "line": 13,
  "name": "debería visualizar los vuelos disponibles para las ciudades seleccionadas",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsultarVuelos.que_he_seleccionado_una_ciudad_de_partida()"
});
formatter.result({
  "duration": 240153884,
  "status": "passed"
});
formatter.match({
  "location": "ConsultarVuelos.he_seleccionado_una_ciudad_de_destino()"
});
formatter.result({
  "duration": 105407127,
  "status": "passed"
});
formatter.match({
  "location": "ConsultarVuelos.presione_el_botón_Buscar_vuelos()"
});
formatter.result({
  "duration": 395932527,
  "status": "passed"
});
formatter.match({
  "location": "ConsultarVuelos.debería_visualizar_los_vuelos_disponibles_para_las_ciudades_seleccionadas()"
});
formatter.result({
  "duration": 5605921,
  "status": "passed"
});
formatter.after({
  "duration": 1185076002,
  "status": "passed"
});
});