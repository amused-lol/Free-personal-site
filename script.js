document.addEventListener('DOMContentLoaded', function() {
    const clickScreen = document.querySelector('.click-screen');
    const clickButton = document.getElementById('click-button');

    clickButton.addEventListener('click', function() {
        clickScreen.classList.add('hidden');
        clickButton.classList.add('hidden');
        // Play the song
        const audio = new Audio('song.mp3');
        audio.play();
    });
});
