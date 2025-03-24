document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const audioPlayer = document.getElementById('audioPlayer');

    playButton.addEventListener('click', function() {
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
    });
});