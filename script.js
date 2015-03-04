$(function(){
	$("img.thumbnail").on("click", function() {
		var imgTag="<img class='focused' src='" + this.src + "'>";
		$("#lightbox").show();
		$("body").html(imgTag);
	});
	$("#lightbox").on("click", function(){
		$(this).hide();
		$(".focused").remove();
	});
});