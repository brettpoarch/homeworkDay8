$(document).ready(function(){
	var num = ""
	
	$(".num").on("click", function(){
		num += $(this).html()
		$("#answer").html(num)
		$("#equals").on("click", function(){
			$("#answer").html(eval(`${num}`))
		})
	})

	/*$("#equals").on("click", function(){
		var set = $`({this})`
		$(this).css("background", "rgb(131,193,120)")
		setTimeout(function(){}, 100)
	})*/

	$("#clear").on("click", function(){
		num = ""
		$("#answer").html(num)
	})

})