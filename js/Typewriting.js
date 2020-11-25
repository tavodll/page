$(function() {

  
  
    Website();
    
    
  

		

		


  function Website() {
	  CheckScripts();		
	
  }

  function CheckScripts() {

    $(document).ready(function(){
      Typewriting();
    });

 }



  function Typewriting() {


  $(document).ready(function(){
	  setTimeout( function(){
		  if($("#site-type").length) {
          $(".typewrite span").typed({
            strings: ["un abogado rapido ", "la mejor asesoria legal "],
            typeSpeed: 97,
            backDelay: 500,
            loop: false,
            contentType: 'html', 
            loopCount: false,
          });
      }
	  }, 3000);
  });
  }
})