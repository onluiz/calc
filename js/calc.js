$(function() {
	$( "#btnCalcular" ).click(function() {
		var av1 = $("#av1").val() * 3;
		var av2 = $("#av2").val() * 3;
		var av3 = $("#av3").val() * 4;
		$("#resultado").val((av1 + av2 + av3) / 10);
	});

	$( "#btnLimpar" ).click(function() {
		$("#av1").val("");
		$("#av2").val("");
		$("#av3").val("");
		$("#resultado").val("");
	});
	
});