$(document).ready(function() {
	$.get("main.txt", function(data) {
		$(".subtext .data").html(data);
	});

	$(".content ul li a").click(function(event) {
		event.preventDefault();

		var url = $(this).attr("href");

		$(".subtext .data").fadeOut("fast", function() {
			$.get(url, function(dada) {
				$(".subtext .data").html(dada);
			});
			$(this).fadeIn("fast");
		});
	});
});