$(document).ready(function(){
		console.log($('prince'));

	$('prince').each(function(index){
		var elemento = $(this);
		$.getJSON('php/json.php',{"item":$(this).attr('itemRSP')}, function(datos){
				con=0;
				for(i in datos.daily){
					con++;
					if(con == 180)
						prince = datos.daily[i]; 
				}
				//$('prince').append('<img src="'+datos.item.icon+'">')
				elemento.append(prince);
		});
		
		if(elemento.attr('imgTypeRSP') == 'ico'){
			elemento.append('<img src="http://services.runescape.com/m=itemdb_rs/obj_sprite.gif?id='+elemento.attr('itemRSP')+'">')
		}
		else if(elemento.attr('imgTypeRSP') == 'big'){
			elemento.append('<img src="http://services.runescape.com/m=itemdb_rs/obj_big.gif?id='+elemento.attr('itemRSP')+'">')
		}
	});

});