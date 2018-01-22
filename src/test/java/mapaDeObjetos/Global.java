package mapaDeObjetos;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.Scenario;

public class Global {
	
	public static WebDriver driver;
	public static WebDriverWait explicitWait;
	
	public static void abrirElNavegador(String navegador) throws IOException {
		if (navegador == "Chrome") {
			File directorioActual = new File(".");
			System.setProperty("webdriver.chrome.driver", directorioActual.getCanonicalPath() + "\\userdata\\chromedriver2_33.exe");
			driver = new ChromeDriver();
		} else {
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
	}
	
	public static void ingresarAlaPagina(String valor) {
		driver.get(valor);
	}

	public static void establecerTiempoDeEsperaExplicita(int tiempoDeEsperaEnSegundos) {
		explicitWait = new WebDriverWait(driver, tiempoDeEsperaEnSegundos);
	}

	public static void tomarEvidencia(Scenario escenario) {
		if (escenario.isFailed()) {
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			escenario.embed(screenshot, "imagen/png"); 
		} else {
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			escenario.embed(screenshot, "imagen/png"); 
		}
	}

	public static void cerrarNavegador() {
		driver.quit();
	}

}
