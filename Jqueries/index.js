
        $(document).ready(function () {
            
            $("#log").click(function() { 
                $( "#dialog" ).dialog({ resizable: false, height:350, width:450, modal: true, show: "scale", position: 'center', top:163, dialogClass: 'success-dialog'});    
            }); 
            
            $("#dialog").bind('clickoutside',function(){
            $(this).hide();
            });
            
            $(".carnes").mouseover(function () {
                $(".overlay").css("display", "block").fadeIn("slow");
            })
            $(".carnes").mouseout(function () {
                $(".overlay").css("display", "none").fadeOut("slow");
            })
            $(".pescados").mouseover(function () {
                $(".overlay2").css("display", "block");
            })
            $(".pescados").mouseleave(function () {
                $(".overlay2").css("display", "none");
            })
            $(".verduras").mouseover(function () {
                $(".overlay3").css("display", "block");
            })
            $(".verduras").mouseleave(function () {
                $(".overlay3").css("display", "none");
            })
            $(".postres").mouseover(function () {
                $(".overlay4").css("display", "block");
            })
            $(".postres").mouseleave(function () {
                $(".overlay4").css("display", "none");
            })
                
          /* Randall */

            $('#Salir').click(function(){
                $('#AdvanceSearch').fadeOut(3000)
            })
            $('#AdvanceSearchtext').click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $('#Recetas').fadeOut("fast");
                $('#AdvanceSearch').fadeIn("fast");
            
            })
            
            $('#BuscarButton').click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $('#AdvanceSearch').fadeOut("fast");
                $('#Recetas').fadeIn("fast");
                $('#containerrecetas').fadeIn("fast");
                
            })
            $('#CloseButton').click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $('#AdvanceSearch').fadeOut("fast");
                $('#Recetas').fadeIn("fast");
                
            })
            
            /* Randall */
            
            
        });
        

        
        $(function() {
            var availableTutorials = [
               "Cebolla",
               "Pepino",
               "Tomate",
               "Huevos",
               "Patata",
               "Arroz",
               "Pasta",
               "Atun",
               "Pollo",
               "Salmon",
               "Merluza",
               "Conejo",
            ];
            $( "#InputWord2" ).autocomplete({
               source: availableTutorials
            });
         });
        
        function onAddTag(tag) {
			alert("Added a tag: " + tag);
		}
		function onRemoveTag(tag) {
			alert("Removed a tag: " + tag);
		}

		function onChangeTag(input,tag) {
			alert("Changed a tag: " + tag);
		}
        $(function() {

			$('#InputWord1').tagsInput({width:'auto'});})