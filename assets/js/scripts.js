//Site scripts
$(function(){
	var today = new Date();

	if (today.getHours() >= 17) {
		$('.morn').css('opacity', 0.5);
	} else {
		$('.eve').css('opacity', 0.5);
	}
});