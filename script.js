$(document).ready(function() {
	$(".noisy_table").click(function() {
		tableNoise();
	});
});

function tableNoise() {
	var audio = new Audio('audio_file.mp3');
	audio.play();
}