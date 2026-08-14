const image = document.querySelector('img');
const title = document.getElementById('tittle');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressCOntainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// Music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Ridwan Design'
    },
    {
        name: 'jacinto-2',
        displayName: 'Electric Chill Machine 2',
        artist: 'Ridwan Design 2'
    },
    {
        name: 'jacinto-3',
        displayName: 'Electric Chill Machine 3',
        artist: 'Ridwan Design 3'
    }
];


// Check if playing
let isPlaying = false;


// Play
function playSong() {
    isPlaying = true;

    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');

    music.play();
}


// Pause
function pauseSong() {
    isPlaying = false;

    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');

    music.pause();
}


// Play / Pause
playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});


// Load Song
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;

    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}


// Current Song
let songIndex = 0;


// Next Song
function nextSong() {

    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    console.log(songIndex);

    loadSong(songs[songIndex]);
    playSong();
}


// Previous Song
function prevSong() {

    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    console.log(songIndex);

    loadSong(songs[songIndex]);
    playSong();
}


// Load first song
loadSong(songs[songIndex]);
function updateProgressBar(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;

        // Progress
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // Duration
        const durationMinutes = Math.floor(duration / 60);

        let durationSecond = Math.floor(duration % 60);

        if (durationSecond < 10) {
            durationSecond = `0${durationSecond}`;
        }

        durationEl.textContent = `${durationMinutes}:${durationSecond}`;
    }
}

function updateProgressBar(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;
        // Progress bar
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        // Current time
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent =
            `${currentMinutes}:${currentSeconds}`;
        // Total duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        durationEl.textContent =
            `${durationMinutes}:${durationSeconds}`;
    }
}
function setProgressBar(e) {
    console.log(e);
    const width = this.clientWidth;
    console.log('width', width);
    const clickX = e.offsetX;
    console.log('clickX', clickX);
    const { duration } = music;
    console.log(clickX / width);
    console.log((clickX / width) * duration);
    music.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

music.addEventListener('timeupdate', updateProgressBar);
progressCOntainer.addEventListener('click',setProgressBar )