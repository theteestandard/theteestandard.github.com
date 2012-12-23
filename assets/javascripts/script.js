$(document).ready(function() {
	insertTimes();
   $('#nav').localScroll({duration:500, offset: 100});
});

function insertTimes() {
	var today = new Date();
	var release = new Date("October 24, 2012 00:00:00");
	var d = today.getDate();
	var h = today.getHours();
	var m = today.getMinutes();
	var rd = release.getDate();
	var rh = release.getHours();
	var rm = release.getMinutes();
	$("#days").html(rd - d - 1);
	$("#hours").html(rh -h + 24 - 1);
	$("#minutes").html(rm - m + 60);
}