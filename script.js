let soundsEnabled = true;

function exploreForest() {
    document.getElementById('fact').innerText = "Tämä metsäpolku vie sinut syvälle taianomaiseen metsään, jossa voit kohdata erilaisia eläimiä ja kasveja.";
    playSound('https://www.soundjay.com/button/beep-07.wav'); // Esimerkki ääni
}

function exploreRiver() {
    document.getElementById('fact').innerText = "Jokiretki vie sinut virtaavan joen varrelle, jossa voit nähdä upeita vesilintuja ja vesikasveja.";
    playSound('https://www.soundjay.com/button/beep-09.wav'); // Esimerkki ääni
}

function exploreMountain() {
    document.getElementById('fact').innerText = "Vuoriretki vie sinut korkealle vuoristoon, josta avautuu huikeat maisemat ja voit nähdä harvinaisia vuorieläimiä.";
    playSound('https://www.soundjay.com/button/beep-10.wav'); // Esimerkki ääni
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
