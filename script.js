let soundsEnabled = true;

function exploreForest() {
    document.getElementById('fact').innerText = "Tämä metsäpolku vie sinut syvälle taianomaiseen metsään, jossa voit kohdata erilaisia eläimiä ja kasveja.";
    playSound('forest.mp3');
}

function exploreRiver() {
    document.getElementById('fact').innerText = "Jokiretki vie sinut virtaavan joen varrelle, jossa voit nähdä upeita vesilintuja ja vesikasveja.";
    playSound('river.mp3');
}

function exploreMountain() {
    document.getElementById('fact').innerText = "Vuoriretki vie sinut korkealle vuoristoon, josta avautuu huikeat maisemat ja voit nähdä harvinaisia vuorieläimiä.";
    playSound('mountain.mp3');
}

function playSound(sound) {
    if (soundsEnabled) {
        let audio = new Audio(sound);
        audio.play();
    }
}

function toggleSounds() {
    soundsEnabled = !soundsEnabled;
    alert(soundsEnabled ? "Äänet päällä" : "Äänet pois päältä");
}
