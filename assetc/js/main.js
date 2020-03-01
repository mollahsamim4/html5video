/*//Get Elements
const player = document.querySelector(`.player`);
const video = player.querySelector(".player_video_viewer");

//Controls elements
const controls = player.querySelector(".player_controls");
const progress = controls.querySelector(".progress");
const progressFilled = progress.querySelector(".progress_filled");

const toggle = controls.querySelector(".player_button_toggle");
const slider = controls.querySelectorAll(".player_slider");
const dataSkip = controls.querySelectorAll(".player_button[data-skip]");
const fullScreen=controls.querySelector(".fullScreen");


function playToggle(e) {
	const method = (video.paused) ? "play" : "pause";
	video[method]();

}
function playVideoOnCLickButton() {
	video.paused ? video.play() : video.pause();
}
//Update Button
function updateButton() {
	const icon = this.paused ? "Play" : "Pause";
	console.log(icon);
	toggle.innerText = icon;
}
function skipFunction(e) {

	video.currentTime += parseFloat(this.dataset.skip);

}

function updateRange(e) {
	video[this.name] = this.value;
}
function handleProgress(e) {
	const percent=(video.currentTime/video.duration)*100;
	progressFilled.style.flexBasis=`${percent}%`;

}

function scrub(e){
	const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime=scrubTime;
	
}

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { /* Firefox 
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera 
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE/Edge 
    video.msRequestFullscreen();
  }
}



let mousedown=false;

video.addEventListener("click", playToggle);
toggle.addEventListener("click", playToggle);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

dataSkip.forEach(skip => skip.addEventListener("click", skipFunction));

slider.forEach(change => change.addEventListener("change", updateRange));

slider.forEach(change => change.addEventListener("mousemove", updateRange));
progress.addEventListener("click",scrub);
progress.addEventListener("mousemove",(e)=>mousedown && scrub(e));
progress.addEventListener("mousedown",()=>mousedown=true);
progress.addEventListener("mouseup",()=>mousedown=false);
fullScreen.addEventListener("click",openFullscreen);


*/

const player=document.querySelector(`.player`);
const video=player.querySelector(`.video_view`);
const controls=player.querySelector(`.player_controls`);
const toggle=controls.querySelector(`.playToggle`);
const videoSkip=controls.querySelectorAll(".playerButton");
const playerSlider=controls.querySelectorAll(".player_slider");
const progress=player.querySelector(`.progress_filled`);
const progressContainer=controls.querySelector(`.progress`);


function togglePlay(e){
	const method=video.paused?"play":"pause";
	video[method]();
}

function updateToggleButton(){
const icon=video.paused ? "Play":"Pause";
toggle.textContent=icon;

}
function playbackSkip(e){
	const dataskip=parseFloat(this.dataset.skip);
	video.currentTime+=dataskip;
}

function progressChange(e){
	const percent=(video.currentTime/video.duration)*100;
	progress.style.flexBasis=`${percent}%`;
}

function videoSlider(e){
video[this.name]=this.value;

}

function progressSliding(e){
	const progressTime=((e.offsetX/progressContainer.offsetWidth)*video.duration);
	video.currentTime=`${progressTime}`;
		const percentChange=(video.currentTime/video.duration)*100;
	progress.style.flexBasis=`${percentChange}%`;

}

let inBetween=false;

toggle.addEventListener("click",togglePlay);
video.addEventListener("click",togglePlay);
toggle.addEventListener("click",updateToggleButton);
videoSkip.forEach(skip=>skip.addEventListener("click",playbackSkip));
playerSlider.forEach(slider=>slider.addEventListener("change",videoSlider));
video.addEventListener("timeupdate",progressChange);

progressContainer.addEventListener("click",progressSliding);
progressContainer.addEventListener("mousemove",(e)=> inBetween && progressSliding(e));
progressContainer.addEventListener("mousedown",()=>inBetween=true);
progressContainer.addEventListener("mouseup",()=>inBetween=false);
progressContainer.addEventListener("mouseout",()=>inBetween=false);

