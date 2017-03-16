$(document).ready(function(){
	$("#comingSoon").css("visibility", "visible").hide().fadeIn(1000, function(){
		$("#OU").css("visibility", "visible").hide().fadeIn(2000, function() {
			$("#logo").css("visibility", "visible").hide().fadeIn(1500, function() {
				$("#updates").css("visibility", "visible").hide().fadeIn(350, function() {
					$("#joinCom").css("visibility", "visible").hide().fadeIn(350, function() {
						$("#sponsor").css("visibility", "visible").hide().fadeIn(350, function() {
							$("#whatIs").css("visibility", "visible").hide().fadeIn(350, function() {
									$("#email").css("visibility", "visible").hide().fadeIn(1000);
							});
						});
					});
				});
			});
		});
	});
});
