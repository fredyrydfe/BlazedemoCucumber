package mapaDeObjetos;

import static mapaDeObjetos.Global.driver;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

public class Inicio {

	public static void seleccionarCiudadDePartida(String valor) {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		new Select(driver.findElement(By.name("fromPort"))).selectByVisibleText(valor);
	}

	public static void seleccionarCiudadDeDestino(String valor) {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		new Select(driver.findElement(By.name("toPort"))).selectByVisibleText(valor);
	}

	public static void presionarBotonBuscarVuelos() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector("input.btn.btn-primary")).click();
	}

}
