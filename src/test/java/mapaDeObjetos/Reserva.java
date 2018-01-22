package mapaDeObjetos;

import static mapaDeObjetos.Global.driver;

import java.util.concurrent.TimeUnit;

public class Reserva {

	public static void verificarInformacionDeVuelosDisponibles() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

}
