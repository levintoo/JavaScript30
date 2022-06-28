const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const playIcon = document.querySelector('.play-icon');
const fullScreen = document.querySelector('.full-screen');

function toggglePlay() {
    if (video.paused) {
        video.play();
    }else {
        video.pause();
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
    video[this.name] = this.value;
}
function handleProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}
function scrub(e) {
    scrubPerc = (e.offsetX / 640)* 100;
    video.currentTime = (scrubPerc/ 100) * video.duration;
    progressBar.style.flexBasis = `${scrubPerc}%`;
}

toggle.addEventListener('click', toggglePlay);
video.addEventListener('click', toggglePlay);
video.addEventListener('play', () => (playIcon.innerHTML = `❚ ❚`));
video.addEventListener('pause', () => (playIcon.innerHTML = `►`));
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);
fullScreen.addEventListener('click',(e) => video.openfullscreen)
