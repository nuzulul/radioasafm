(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();var t="https://stream.zeno.fm/2x8c8cnq2zhvv";document.querySelector("#app").innerHTML=`
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
			  <audio id="radioPlayer" src="${t}"></audio>
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
`;var d=document.getElementById("radioPlayer"),i=document.getElementById("radioVol"),u=50,a,w;$(".button-play").click(function(){a=$(this).find("i"),a.hasClass("fa-pause")?(a.removeClass("fa-pause"),a.addClass("fa-play"),d.src!=t&&(d.src=t),d.pause(),f()):(a.removeClass("fa-play"),a.addClass("fa-pause"),d.play(),$(".wave").removeClass("no-animation"))});$(".button-stop").click(function(){a=$(".button-play").find("i"),a.hasClass("fa-pause")&&(a.removeClass("fa-pause"),a.addClass("fa-play"),d.src=t),f()});$(".button-sound").click(function(){a=$(this).find("i"),a.hasClass("fa-volume-off")?i.value=u:i.value=0,y()});function y(){d.volume=i.value,h()}function h(){a=$(".button-sound").find("i"),i.value==0?(a.removeClass("fa-volume-up"),a.removeClass("fa-volume-down"),a.addClass("fa-volume-off")):i.value<50?(a.removeClass("fa-volume-off"),a.removeClass("fa-volume-up"),a.addClass("fa-volume-down"),u=i.value):(a.removeClass("fa-volume-off"),a.removeClass("fa-volume-down"),a.addClass("fa-volume-up"),u=i.value)}function f(){$(".wave").each(function(){w=$(this).height(),$(this).css("height",w)}),$(".wave").addClass("no-animation")}$(".button-play").click();var p=!1;function m(){const r=document.querySelector("#radioPlayer");if(r.paused){const c=r.play();c!==void 0&&c.then(l=>{p=!0,$(".button-play").click()}).catch(l=>{console.log("sound failed -> ",l)})}else $(".button-play").click()}function v(){p||m()}$("body").on({click:v,contextmenu:v,dblclick:v,mouseup:v,pointerup:v,touchend:v,keyup:v,scroll:v});m();
