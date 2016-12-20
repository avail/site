$(document).ready(function() {
	$.get("main.txt", function(data) {
		$(".subtext .data").html(data);
	});

	$(".content ul li a").click(function(event) {
		var url = $(this).attr("href");

		if (url != "/blog") {
			event.preventDefault();
		}

		$(".subtext .data").fadeOut("fast", function() {
			$.get(url, function(dada) {
				$(".subtext .data").html(dada);
			});
			$(this).fadeIn("fast");
		});
	});
});