import { writable } from 'svelte/store';

export const dataStore = writable({
	data: [
		{
			label: 'Laniakea',
			text: 'Todas las estrellas que vemos en el cielo son parte de nuestra galaxia, la vía lactea. Pero, como la nuestra, existen infinitas otras galaxias en el espacio. En los últimos años, viendo las distancias y velocidades de galaxias alrededor nuestro, lograron identificar que nuestra galaxia pertenece a un continente de 100 mil otras galaxias aproximadamente. Con "Laniakea", nos referimos basicamente a ese cumulo "local" de galaxias donde estámos ubicados. Es un poco la siguente escala de eso: tierra (nuestro planeta) - nuestro sistema solar - la vía lactea (nuestra galaxia) - laniakea (nuestro "sistema" de galaxias).',
			color: 'foam-green',
		},
		{
			label: 'Sirius',
			text: ' Es un sistema de estrella binario, o sea, son dos estrellas muy cercanas que se rodean entre si. Sirius A actualmente es la estrella más brillante de nuestro cielo, de la clase A (blanca).  Sirius B es su acompañante, una estrella muy chiquita (enana blanca) que ya murió. Durante muchisimos años, Sirius B de hecho era la estrella más grande de las dos, consumió parte de ella a su compañera Sirius A. Como era más grande, consumió su combustible antes y después de morir quedó sólo como enana blanca al lado de su compañera.',
			color: 'foam-green',
		},
		{
			label: 'Canopus',
			text: 'Es una estrella aún mucho más grande y brillante que Sirius, de la clase F. También más lejana, es por eso también que en nuestro cielo se observa como la segunda más brillante. "Canopus" se llamaba el piloto del barco de Menelao en la mitologia griega, y llamaron a la estrella así porque era la más brillante en una constelación muy grande llamada Argo Navis (también una nave de la mitología griega).',
			color: 'ufo-green',
		},
		{
			label: 'Betelgueuse',
			text: 'Es una estrella aún más grande, una supergigante roja en su último estado de vida de clase M. Es la menos 700 veces más grande que nuestro sol, incluso tiene aproximadamente el tamaño de todo nuestro sistema solar completo. Es muy fácil su observación, es el brazo de la constelación de orion, donde se encuentran las tres marias, y en cielos despejados se la ve como un punto rojo. Por su masa, luego de que muera y explote en supernova, se convertirá en un pulsar o un magnetar. Cabe destacar que se encuentra a 642,5 años luz, por lo que si exploto puede que aun no lo sepamos, de ser asi, hala luz de su explosión crearía en el cielo un segundo sol que dejaría a la tierra por al menos 6 meses sin noches.',
			color: 'ufo-green',
		},
		{
			label: 'Geminga',
			text: ' Es un pulsar, una estrella muerta, un fantasma, más especificamente una estrella de neutrones y de la misma familia que los Magnetares. Le decimos "muerta" a una estrella cuando ya no hay fusion nuclear adentro de ella, o sea, que ya no fusiona atomos de hidrogeno y helio generando energia, luz, calor, etc. Igualmente, que este muerta no significa que este "sin movimiento". En el caso de Geminga por ejemplo: gira increíblemente rapida y por su campo electromagnetico y el giro emite rayos X a gran escala. De hecho, nosotros en general no podemos ver estrellas muertas con telescopios (porque no hay luz para verlas), pero a Geminga la pudimos detectar por su emisión de rayos X.',
			color: 'mulberry',
		},
		{
			label: 'Gaia',
			text: 'En ciertas condiciones, con estrellas muy gigantes o de enorme masa, sus muertes pueden desarollar agujeros negros. Son cosas aún más raras que las estrellas neutrones, porque cerca de ellos la fisica tradicional que conocemos no puede explicarlos. Ningún otro fenómeno cósmico es quizás tan fascinante como los agujeros negros, lugares donde la gravedad es tan fuerte que tuercen la naturaleza misma del espacio y el tiempo a su alrededor, tan fuertemente que ni siquiera la luz puede escapar de su atracción. Gaia se encuentra a 1.560 años luz de la tierra en la constelación de Ofiuco, es una estrella de tipo G que tiene como compañero un agujero negro llamado Gaia BH1 descubierto recientemente en el 2022. Lleva el nombre del telescopio Gaia de la agencia espacial europea quien descubrió a dicho sistema estelar.',
			color: 'mulberry',
		},
		{
			label: 'Messier 42',
			text: ' Es la nebulosa de Orion y es una de las nebulosas más brillantes que existen y puede ser observada a simple vista sobre el cielo nocturno, la nebulosa de Orión es uno de los objetos astronómicos más fotografiados, examinados e investigados. De ella se ha obtenido información determinante acerca de la formación de estrellas y planetas a partir de nubes de polvo y gas en colisión. Los astrónomos han observado en sus entrañas discos protoplanetarios, enanas marrones, fuertes turbulencias que alcanzan velocidades de 700.000 km por hora. Es la cuna de estrellas. Lleva el nombre del astrofísico francés Charles Messier quien fue el primero en observar estos fenómenos en el cielo, pensando que se trataban de cometas.',
			color: 'winter-wizard',
		},
		{
			label: 'Tabit',
			text: 'Es una enana amarilla, como nuestro sol, de clase F que se encuentro en los albores de la nebulosa de orion, puede incluso que haya nacido ahí. En cielos muy despejados y sin la presencia de polucion y de las luces de una ciudad podemos llegar a observarla al lado de las tres marías. Su nombre puede provenir del árabe Al Thabit, «la que perdura». En un principio se pensaba que el nombre provenía de pensar que la estrella vivía más que muchas otras estrellas por su tamaño y naturaleza, pero ahora se sabe que no es cierto. Otras teorías dicen que simplemente la llamaron asi porque es el "escudo" de Orion, el cazador mitologico que debía perdurar.',
			color: 'winter-wizard',
		},
	],
	loading: false,
});
