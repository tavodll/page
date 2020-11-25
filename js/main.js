(function(){
let cerrar=document.querySelectorAll(".close")[0];
let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-container")[0];


var propMenu = {

	burger_menu: document.getElementById('burger-menu'),
	slideMenu: document.getElementById('slidemenu'),
	menu_activo: false,
	elem_menu: document.querySelectorAll('#slidemenu .menu-navegacion-mobile a')

}


var metMenu = {
	
	inicio: function () {
		
		propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

		for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}

	},

	toggleMenu: function () {
		if ( propMenu.menu_activo == false ) {

			propMenu.menu_activo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
            document.getElementById('top-2').style.backgroundColor='white';
            document.getElementById('top-2').style.boxShadow=' 0 0 6px rgba(0, 0, 0, .6)';
            document.getElementById('home-2').style.color='black';
            document.getElementById('hamburguesa').style.color='black';


            

		} else{

			propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
            if(window.pageYOffset ==0){
            document.getElementById('top-2').style.backgroundColor='transparent';
            document.getElementById('top-2').style.boxShadow='none';
            document.getElementById('home-2').style.color='white';
            document.getElementById('hamburguesa').style.color='white';
            }


            

		}
	},

	ocultarMenu: function () {
		propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        
        
	}

}

metMenu.inicio();
 
window.onscroll=function(){
    if(window.pageYOffset >5){
        document.getElementById('top').style.backgroundColor='white';
        document.getElementById('home').style.color='black';
        document.getElementById('work').style.color='black';
        document.getElementById('features').style.color='black';
        document.getElementById('blog').style.color='black';
        document.getElementById('contac').style.color='black';
        document.getElementById('top').style.boxShadow=' 0 0 6px rgba(0, 0, 0, .6)';
        document.getElementById('top-2').style.backgroundColor='white';
        document.getElementById('top-2').style.boxShadow=' 0 0 6px rgba(0, 0, 0, .6)';
        document.getElementById('home-2').style.color='black';
        document.getElementById('hamburguesa').style.color='black';


    }
    else{
        document.getElementById('top').style.backgroundColor='transparent';
        document.getElementById('home').style.color='white';
        document.getElementById('work').style.color='white';
        document.getElementById('features').style.color='white';
        document.getElementById('blog').style.color='white';
        document.getElementById('contac').style.color='white';
        document.getElementById('top').style.boxShadow='none';
        document.getElementById('top-2').style.boxShadow='none';
        document.getElementById('top-2').style.backgroundColor='transparent';
        document.getElementById('home-2').style.color='white';
        document.getElementById('hamburguesa').style.color='white';



    }


}




cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },1000)
        
})
}())



