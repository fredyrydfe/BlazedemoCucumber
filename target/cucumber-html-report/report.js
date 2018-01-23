$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/caracteristicas/AprobarPropuestaSalud.feature");
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
      "value": "## ININTER-40 Aprobar propuesta - \"Pre-Aprobado\""
    }
  ],
  "line": 4,
  "name": "Aprobar propuesta de Salud",
  "description": "Como Gerente Senior de Productos necesito modificar el estado de la propuesta entregada por las Áreas \r\nProducto, Técnico para ser presentada a la Gerencia de Negocios y posteriormente a la entidad reguladora \r\npara su respectiva aprobación.",
  "id": "aprobar-propuesta-de-salud",
  "keyword": "Característica"
});
formatter.before({
  "duration": 7887168879,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "el usuario gerente senior de producto aprueba la propuesta para ser presentada a la Gerencia de Negocios",
  "description": "",
  "id": "aprobar-propuesta-de-salud;el-usuario-gerente-senior-de-producto-aprueba-la-propuesta-para-ser-presentada-a-la-gerencia-de-negocios",
  "type": "scenario",
  "keyword": "Escenario",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@Regresión"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que el usuario de producto notifica una propuesta local de Salud al área técnica",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "que el usuario gerente técnico local ha evaluado la propuesta para ser pre-aprobada por el área de productos",
  "keyword": "Y "
});
formatter.step({
  "line": 13,
  "name": "que he iniciado sesión con el rol gerente senior de producto",
  "keyword": "Y "
});
formatter.step({
  "line": 14,
  "name": "he ingresado al módulo de Planes",
  "keyword": "Y "
});
formatter.step({
  "line": 15,
  "name": "he consultado la propuesta notificada por el área técnica",
  "keyword": "Y "
});
formatter.step({
  "line": 16,
  "name": "he seleccionado un análisis técnico como definitivo",
  "keyword": "Y "
});
formatter.step({
  "line": 17,
  "name": "debería visualizar una notificación solicitando la confirmación de la selección del ánalisis técnico definitivo",
  "keyword": "Y "
});
formatter.step({
  "line": 18,
  "name": "debería visualizar una notificación indicando la selección del análisis técnico definitivo",
  "keyword": "Y "
});
formatter.step({
  "line": 19,
  "name": "he aprobado la propuesta",
  "keyword": "Cuando "
});
formatter.step({
  "line": 20,
  "name": "debería visualizar una notificación indicando que la propuesta ha sido pre-aprobada",
  "keyword": "Entonces "
});
formatter.step({
  "line": 21,
  "name": "no debería poder modificar la propuesta",
  "keyword": "Y "
});
formatter.step({
  "line": 22,
  "name": "no debería poder modificar el cuadro de beneficios",
  "keyword": "Y "
});
formatter.step({
  "line": 23,
  "name": "no debería poder modificar la información de primas",
  "keyword": "Y "
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.que_el_usuario_de_producto_notifica_una_propuesta_local_de_Salud_al_área_técnica()"
});
formatter.result({
  "duration": 159022729464,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarContraPropuestaSalud.que_el_usuario_gerente_técnico_local_ha_evaluado_la_propuesta_para_ser_pre_aprobada_por_el_área_de_productos()"
});
formatter.result({
  "duration": 44802764798,
  "status": "passed"
});
formatter.match({
  "location": "DefinicionDePasosComunes.que_he_iniciado_sesión_con_el_rol_gerente_senior_de_producto()"
});
formatter.result({
  "duration": 3444705229,
  "status": "passed"
});
formatter.match({
  "location": "DefinicionDePasosComunes.he_ingresado_al_módulo_de_Planes()"
});
formatter.result({
  "duration": 4710248920,
  "status": "passed"
});
formatter.match({
  "location": "AdicionarContraPropuestaSalud.he_consultado_la_propuesta_notificada_por_el_área_técnica()"
});
formatter.result({
  "duration": 10961242500,
  "status": "passed"
});
formatter.match({
  "location": "SeleccionarAnalisisTecnicoDefinitivoSalud.he_seleccionado_un_análisis_técnico_como_definitivo()"
});
formatter.result({
  "duration": 12146622304,
  "status": "passed"
});
formatter.match({
  "location": "SeleccionarAnalisisTecnicoDefinitivoSalud.debería_visualizar_una_notificación_solicitando_la_confirmación_de_la_selección_del_ánalisis_técnico_definitivo()"
});
formatter.result({
  "duration": 123055310,
  "status": "passed"
});
formatter.match({
  "location": "SeleccionarAnalisisTecnicoDefinitivoSalud.debería_visualizar_una_notificación_indicando_la_selección_del_análisis_técnico_definitivo()"
});
formatter.result({
  "duration": 5053471168,
  "status": "passed"
});
formatter.match({
  "location": "AprobarPropuestaSalud.he_aprobado_la_propuesta()"
});
formatter.result({
  "duration": 11408645603,
  "status": "passed"
});
formatter.match({
  "location": "AprobarPropuestaSalud.debería_visualizar_una_notificación_indicando_que_la_propuesta_ha_sido_pre_aprobada()"
});
formatter.result({
  "duration": 219750542,
  "status": "passed"
});
formatter.match({
  "location": "NotificarPropuestaAlAreaTecnica.no_debería_poder_modificar_la_propuesta()"
});
formatter.result({
  "duration": 30194055353,
  "status": "passed"
});
formatter.match({
  "location": "NotificarPropuestaAlAreaTecnica.no_debería_poder_modificar_el_cuadro_de_beneficios()"
});
formatter.result({
  "duration": 66421818136,
  "status": "passed"
});
formatter.match({
  "location": "NotificarPropuestaAlAreaTecnica.no_debería_poder_modificar_la_información_de_primas()"
});
formatter.result({
  "duration": 30143173023,
  "status": "passed"
});
formatter.after({
  "duration": 1574215052,
  "status": "passed"
});
});