const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');
const speed = document.querySelector('.player-speed');


// Play & Pause ----------------------------------- //

function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause');
    } else {
        video.pause();
        playBtn.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('title', 'Play');
    }
}


// Progress Bar ---------------------------------- //

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;

    progressBar.style.width = `${percent}%`;

    // Current Time
    const minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    currentTime.textContent = `${minutes}:${seconds}/`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;

    video.currentTime = (clickX / width) * duration;
}

video.addEventListener('timeupdate', updateProgress);

progressRange.addEventListener('click', setProgress);


// Volume Controls ------------------------------- //

function toggleMute() {
    if (video.muted) {
        video.muted = false;

        volumeIcon.classList.replace(
            'fa-volume-mute',
            'fa-volume-up'
        );

        volumeIcon.setAttribute('title', 'Mute');

        volumeBar.style.width = `${video.volume * 100}%`;

    } else {
        video.muted = true;

        volumeIcon.classList.replace(
            'fa-volume-up',
            'fa-volume-mute'
        );

        volumeIcon.setAttribute('title', 'Unmute');

        volumeBar.style.width = '0%';
    }
}

function changeVolume(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;

    const volume = clickX / width;

    video.volume = volume;
    video.muted = false;

    volumeBar.style.width = `${volume * 100}%`;

    if (volume === 0) {

        volumeIcon.classList.remove(
            'fa-volume-up',
            'fa-volume-down'
        );

        volumeIcon.classList.add('fa-volume-mute');

    } else if (volume < 0.5) {

        volumeIcon.classList.remove(
            'fa-volume-up',
            'fa-volume-mute'
        );

        volumeIcon.classList.add('fa-volume-down');

    } else {

        volumeIcon.classList.remove(
            'fa-volume-down',
            'fa-volume-mute'
        );

        volumeIcon.classList.add('fa-volume-up');
    }
}

volumeIcon.addEventListener('click', toggleMute);

volumeRange.addEventListener('click', changeVolume);


// Change Playback Speed -------------------------- //

function changeSpeed() {
    video.playbackRate = parseFloat(speed.value);

    console.log('Selected speed:', speed.value);
    console.log('Video speed:', video.playbackRate);
}

speed.addEventListener('change', changeSpeed);


// Duration --------------------------------------- //

function displayDuration() {
    const minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration % 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    duration.textContent = `${minutes}:${seconds}`;
}

video.addEventListener('loadedmetadata', displayDuration);


// Fullscreen ------------------------------------ //

function toggleFullscreen() {

    if (document.fullscreenElement) {
        document.exitFullscreen();

    } else {
        video.requestFullscreen();
    }
}

fullscreenBtn.addEventListener('click', toggleFullscreen);


// Event Listeners ------------------------------- //

playBtn.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);