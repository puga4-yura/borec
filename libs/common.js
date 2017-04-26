$(document).ready(function () {
	$(window).on("load", function () {
		$('.bl2 .flexslider').flexslider({
			animation: "slide"
		});
	});

	$('.cmn-toggle-switch__htx').on('click', function (e) {
		e.preventDefault();
		$('.menu ').slideToggle();
	});
	$(window).resize(function () {
		var wid = $(window).width();
		if (wid > 767 && $('.menu').is(':hidden')) {
			$('.menu ').removeAttr('style');
		}
	});
	(function () {
		var toggles = document.querySelectorAll(".cmn-toggle-switch");
		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				(this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
			});
		}
	})();
})
