$(function() {

	$( "#btnCalcular" ).click(function() {
		var av1 = $("#av1").val() * $("#peso1").val();
		var av2 = $("#av2").val() * $("#peso2").val();
		var av3 = $("#av3").val() * $("#peso3").val();
		var resultado = (av1 + av2 + av3) / 10;
		$("#resultado").val(resultado);

		if(resultado >= $("#media").val()){
			$("#divMensagem").removeClass("warning round");
			$("#divMensagem").addClass("success radius");
			$("#mensagem").html("Você vai passar! Uhuul :D");

		} else{
			$("#divMensagem").removeClass("success radius");
			$("#divMensagem").addClass("warning round");
			$("#mensagem").html("Semestre que vem tem mais HAHAHA ;P");
		}
		
	});

	$( "#av1, #av2" ).blur(function() {
	 	var av1 = $("#av1").val() * $("#peso1").val();
		var av2 = $("#av2").val() * $("#peso2").val();
		var soma = av1 + av2;
		var av3 = soma <= ($("#media").val() * 10) ? (($("#media").val() * 10) - soma) / $("#peso3").val() : 0;
		$("#av3").val(av3);
	});

	$( "#btnLimpar" ).click(function() {
		$("#av1, #av2, #av3, #resultado").val("");
		$("#divMensagem").removeClass("success radius warning round");
		$("#mensagem").html("Calcule sua média! :)");
	});

});