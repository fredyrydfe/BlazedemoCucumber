package definicionDePasos;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;
import mapaDeObjetos.Global;
import mapaDeObjetos.Inicio;
import mapaDeObjetos.Reserva;

public class ConsultarVuelos {
	
	@Before
	public void preparar_ambiente_de_prueba() throws Throwable {
		Global.abrirElNavegador("Chrome");
		Global.ingresarAlaPagina("http://blazedemo.com/index.php");
		Global.establecerTiempoDeEsperaExplicita(30);
	}

	@After
	public void finalizar_ejecucion(Scenario escenario) throws Throwable {
		Global.tomarEvidencia(escenario);
		Global.cerrarNavegador();
	}

	@Dado("^que he seleccionado una ciudad de partida$")
	public void que_he_seleccionado_una_ciudad_de_partida() throws Throwable {
	    Inicio.seleccionarCiudadDePartida("Boston");
	}

	@Dado("^he seleccionado una ciudad de destino$")
	public void he_seleccionado_una_ciudad_de_destino() throws Throwable {
	    Inicio.seleccionarCiudadDeDestino("New York");
	}

	@Cuando("^presione el botón Buscar vuelos$")
	public void presione_el_botón_Buscar_vuelos() throws Throwable {
	    Inicio.presionarBotonBuscarVuelos();
	}

	@Entonces("^debería visualizar los vuelos disponibles para las ciudades seleccionadas$")
	public void debería_visualizar_los_vuelos_disponibles_para_las_ciudades_seleccionadas() throws Throwable {
	    Reserva.verificarInformacionDeVuelosDisponibles();
	}


}
