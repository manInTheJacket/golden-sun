const musicToggleButton = document.getElementById('music_toggle');
const backgroundMusic = new Audio('../audio/The_Last_Samurai_OST_1.mp3');

let isMusicPlaying = false;
backgroundMusic.loop = true;
backgroundMusic.volume = 1;

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggleButton.textContent = 'Play Music';
    } else {
        backgroundMusic.play()
            .then(() => {
                musicToggleButton.textContent = 'Pause Music';
            })
            .catch(error => {
                console.log('Playback failed:', error);
            });
    }
    isMusicPlaying = !isMusicPlaying;
}

musicToggleButton.addEventListener('click', toggleMusic);
