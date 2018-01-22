package opcionesCucumber;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/resources/caracteristicas",
		//features = "src/test/resources/caracteristicas/ConsultarVuelos.feature"
		glue = "definicionDePasos",
		//tags = "@SmokeTest, @Regresión",
		//tags = "@SmokeTest",
		tags = "@Regresión",
		plugin = { "pretty", "html:target/cucumber-html-report", "json:target/cucumber.json" }
)

public class Ejecutor {

}
