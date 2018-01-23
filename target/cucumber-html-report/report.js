$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/caracteristicas/CalcularPrimaUnicaSalud.feature");
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
      "value": "## ININTER-144 Ingresar valor individual de las primas"
    },
    {
      "line": 4,
      "value": "## ININTER-163 Cálculo Prima Única"
    },
    {
      "line": 5,
      "value": "## ININTER-467 Identificar beneficios capitados"
    },
    {
      "line": 6,
      "value": "## ININTER-471 Primas - Adición de Beneficios No Capitados"
    }
  ],
  "line": 7,
  "name": "Calcular la prima única en una propuesta de Salud",
  "description": "Como Usuario del Área Técnica necesito obtener la prima única para completar \r\nel análisis técnico que se enviará a Productos.",
  "id": "calcular-la-prima-única-en-una-propuesta-de-salud",
  "keyword": "Característica"
});
formatter.before({
  "duration": 7318910957,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "el usuario técnico local configura la prima única para una propuesta de Salud con subramo Local",
  "description": "",
  "id": "calcular-la-prima-única-en-una-propuesta-de-salud;el-usuario-técnico-local-configura-la-prima-única-para-una-propuesta-de-salud-con-subramo-local",
  "type": "scenario",
  "keyword": "Escenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    },
    {
      "line": 11,
      "name": "@Regresión1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que el usuario de producto notifica una propuesta local de Salud al área técnica",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "que he iniciado sesión con el rol gerente técnico local",
  "keyword": "Y "
});
formatter.step({
  "line": 15,
  "name": "he ingresado al módulo de Planes",
  "keyword": "Y "
});
formatter.step({
  "line": 16,
  "name": "he consultado la propuesta notificada por producto",
  "keyword": "Y "
});
formatter.step({
  "line": 17,
  "name": "he ingresado a la configuración de primas de la propuesta",
  "keyword": "Y "
});
formatter.step({
  "line": 18,
  "name": "he ingresado los valores individuales de las primas para beneficios capitados y no capitados",
  "keyword": "Cuando "
});
formatter.step({
  "line": 19,
  "name": "debería visualizar una notificación indicando el guardado de la prima única",
  "keyword": "Entonces "
});
formatter.step({
  "line": 20,
  "name": "debería visualizar el resultado del cálculo de la prima única",
  "keyword": "Y "
});
formatter.step({
  "line": 21,
  "name": "debería visualizar el cálculo de la prima única no capitada",
  "keyword": "Y "
});
formatter.step({
  "line": 22,
  "name": "debería visualizar el cálculo de los beneficios capitados",
  "keyword": "Y "
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.que_el_usuario_de_producto_notifica_una_propuesta_local_de_Salud_al_área_técnica()"
});
formatter.result({
  "duration": 199096498887,
  "status": "passed"
});
formatter.match({
  "location": "DefinicionDePasosComunes.que_he_iniciado_sesión_con_el_rol_gerente_técnico_local()"
});
formatter.result({
  "duration": 3853057302,
  "status": "passed"
});
formatter.match({
  "location": "DefinicionDePasosComunes.he_ingresado_al_módulo_de_Planes()"
});
formatter.result({
  "duration": 8914483031,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.he_consultado_la_propuesta_notificada_por_producto()"
});
formatter.result({
  "duration": 5541166585,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.he_ingresado_a_la_configuración_de_primas_de_la_propuesta()"
});
formatter.result({
  "duration": 5878732342,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.he_ingresado_los_valores_individuales_de_las_primas_para_beneficios_capitados_y_no_capitados()"
});
formatter.result({
  "duration": 15981437644,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.debería_visualizar_una_notificación_indicando_el_guardado_de_la_prima_única()"
});
formatter.result({
  "duration": 174420406,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.debería_visualizar_el_resultado_del_cálculo_de_la_prima_única()"
});
formatter.result({
  "duration": 166308215,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.debería_visualizar_el_cálculo_de_la_prima_única_no_capitada()"
});
formatter.result({
  "duration": 190788985,
  "status": "passed"
});
formatter.match({
  "location": "CalcularPrimaUnicaSalud.debería_visualizar_el_cálculo_de_los_beneficios_capitados()"
});
formatter.result({
  "duration": 25964622,
  "status": "passed"
});
formatter.after({
  "duration": 1211478352,
  "status": "passed"
});
});