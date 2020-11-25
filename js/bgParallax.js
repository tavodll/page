(function(){

var propParallax = {

	seccion: document.querySelector('.parallax'),
	recorrido: null,
	limite: null

}

var propParallax2={
    seccion: document.querySelector('.foto1'),
	recorrido: null,
	limite: null
}

var propParallax3={
    seccion: document.querySelector('.foto2'),
	recorrido: null,
	limite: null
}
var propParallax4={
    seccion: document.querySelector('.foto3'),
	recorrido: null,
	limite: null
}


var metparallax = {

	inicio: function () {
		window.addEventListener('scroll', metparallax.scrollParallax);
	},

	scrollParallax: function () {
		
		propParallax.recorrido = window.pageYOffset;
		propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

		if ( propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite ) {

			propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';

		} else{
			propParallax.seccion.style.backgroundPositionY = 0;
        }
        

        propParallax2.recorrido = window.pageYOffset;
		propParallax2.limite = propParallax2.seccion.offsetTop + propParallax2.seccion.offsetHeight;

		if ( propParallax2.recorrido > propParallax2.seccion.offsetTop - window.outerHeight && propParallax2.recorrido <= propParallax2.limite ) {

			propParallax2.seccion.style.backgroundPositionY = (propParallax2.recorrido - propParallax2.seccion.offsetTop) / 1.5 + 'px';

		} else{
			propParallax2.seccion.style.backgroundPositionY = 0;
		}


		propParallax3.recorrido = window.pageYOffset;
		propParallax3.limite = propParallax3.seccion.offsetTop + propParallax3.seccion.offsetHeight;

		if ( propParallax3.recorrido > propParallax3.seccion.offsetTop - window.outerHeight && propParallax3.recorrido <= propParallax3.limite ) {

			propParallax3.seccion.style.backgroundPositionY = (propParallax3.recorrido - propParallax3.seccion.offsetTop) / 1.5 + 'px';

		} else{
			propParallax3.seccion.style.backgroundPositionY = 0;
		}


		propParallax4.recorrido = window.pageYOffset;
		propParallax4.limite = propParallax4.seccion.offsetTop + propParallax4.seccion.offsetHeight;

		if ( propParallax4.recorrido > propParallax4.seccion.offsetTop - window.outerHeight && propParallax4.recorrido <= propParallax4.limite ) {

			propParallax4.seccion.style.backgroundPositionY = (propParallax4.recorrido - propParallax4.seccion.offsetTop) / 1.5 + 'px';

		} else{
			propParallax4.seccion.style.backgroundPositionY = 0;
		}

        
	}
	
}

metparallax.inicio();
	
}())
