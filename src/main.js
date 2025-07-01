import './style.css'

var source = 'https://stream.zeno.fm/2x8c8cnq2zhvv' //bsmifm
//var source = 'https://stream.zeno.fm/y7r1pdrjiituv' //asafm

document.querySelector('#app').innerHTML = `
  <div>
		<div class="radio-container">
		  <div class="radio-header">
			<div class="radio-name"><a href="/"><img width="200px" src="./logo.jpg"></a></div>
			<div class="current-presenter">Sambung Selaksa Asa Indonesia</div>
		  </div>
		  <div class="radio-body">
			<div class="shine"></div>
			<!-- disabled for now 
			<div class="current-song">
			  Dua Lipa - Scared to be lonely
			</div>
		-->
			<div class="radio-buttons">
			  <audio id="radioPlayer" src="${source}"></audio>
			  <div class="button button-play"><i class="fa fa-pause" aria-hidden="true"></i></div>
			  <div class="button button-stop"><i class="fa fa-stop" aria-hidden="true"></i></div>		  
			  <img width="100px" src="./live.gif">
			  <!-- disabled for now 
		<div class="button button-request">Request</div>
		-->
			</div>
			<div class="wave-bars">
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			  <div class="wave wave-1"></div>
			  <div class="wave wave-2"></div>
			  <div class="wave wave-3"></div>
			  <div class="wave wave-4"></div>
			  <div class="wave wave-5"></div>
			</div>
		  </div>
		  <div class="radio-message">
			<div class="message-header">
			  
			</div>
			<div class="message-body">
			  Jl Pattimura Gg X No. 16 | Kota Blitar
			</div>
		  </div>
		  <!--<div class="radio-volume">
			<div class="button button-sound"><i class="fa fa-volume-up" aria-hidden="true"></i></div>
			<input id="radioVol" class="range" type="range" value="50" oninput="setVolume()" onchange="setVolume()">
		  </div>-->
		</div>
  </div>
`


var player = document.getElementById('radioPlayer');
var radioVolume = document.getElementById('radioVol');
var userVolume = 50;
var icon,height;


$('.button-play').click(function() {
  icon = $(this).find('i');
  
  if (icon.hasClass('fa-pause')) {
    icon.removeClass('fa-pause');
    icon.addClass('fa-play');
    if (player.src != source){
		  player.src = source;
    }
		player.pause();
    waveAfterWave();
  } else {
    icon.removeClass('fa-play');
    icon.addClass('fa-pause');
    player.play();
    $('.wave').removeClass('no-animation');
  }
});

$('.button-stop').click(function() {
  icon = $('.button-play').find('i');
  
  if (icon.hasClass('fa-pause')) {
    icon.removeClass('fa-pause');
    icon.addClass('fa-play');
    player.src = source;
  }
  waveAfterWave();
});

$('.button-sound').click(function() {
  icon = $(this).find('i');
  
  if (icon.hasClass('fa-volume-off')) {
    radioVolume.value = userVolume;
  } else {
    radioVolume.value = 0;
  }
  setVolume();
});

function setVolume() {
  player.volume = radioVolume.value;
  checkVolume();
};

function checkVolume() {
  icon = $('.button-sound').find('i');
  
  if (radioVolume.value == 0) {
    icon.removeClass('fa-volume-up');
    icon.removeClass('fa-volume-down');
    icon.addClass('fa-volume-off');
  } else if (radioVolume.value < 50) {
    icon.removeClass('fa-volume-off');
    icon.removeClass('fa-volume-up');
    icon.addClass('fa-volume-down');
    userVolume = radioVolume.value;
  } else {
    icon.removeClass('fa-volume-off');
    icon.removeClass('fa-volume-down');
    icon.addClass('fa-volume-up');
    userVolume = radioVolume.value;
  }
};

function waveAfterWave() {
  $('.wave').each(function(){
    height = $(this).height();
    $(this).css('height', height);
  });
  $('.wave').addClass('no-animation');
};

$('.button-play').click()


var backsoundplayerStart = false

function togglebacksoundplayer(){

	const audio = document.querySelector('#radioPlayer')

	const paused = audio.paused
	if(paused){
		//console.log('audio paused');
		const promise = audio.play()
		if (promise !== undefined) {
			promise.then(_ => {
				backsoundplayerStart = true
				//audio.play()
				$('.button-play').click()
			}).catch(error => {
				
				console.log('sound failed -> ',error)
			})
		}
	}else{
		//console.log('audio not paused');
		//audio.pause()
		$('.button-play').click()
	}
}

function togglebacksoundplayerrun(){
	if(backsoundplayerStart){
		//console.log('backsoundplayerStart cancel');
		return
	}else{
		//console.log('backsoundplayerStart ok');
		togglebacksoundplayer()
	}
}

$("body").on({
	click: togglebacksoundplayerrun,
	contextmenu: togglebacksoundplayerrun,
	dblclick: togglebacksoundplayerrun,
	mouseup: togglebacksoundplayerrun,
	pointerup: togglebacksoundplayerrun,
	touchend: togglebacksoundplayerrun,
	keyup: togglebacksoundplayerrun,
	scroll: togglebacksoundplayerrun
});

togglebacksoundplayer()