// This list MUST match your sidebar filenames exactly (including Capital Letters!)
const songs = [
    { title: "Abentini", file: "ABENTINI.mp3" },
    { title: "Craft Stolen Jam", file: "CRAFT STOLEN JAM.mp3" },
    { title: "Easy Skiddo", file: "EASY SKIDDO.m4a" },
    { title: "Medicine", file: "MEDICINE.mp3" },
    { title: "Miami", file: "MIAMI.mp3" },
    { title: "Put Am", file: "PUT AM.m4a" },
    { title: "This", file: "THIS.mp3" }
];

const musicList = document.getElementById('music-list');
const audioPlayer = document.getElementById('main-audio');

// 1. Create a "Now Playing" display at the top of the list
const statusDisplay = document.createElement('div');
statusDisplay.style.margin = "10px 0";
statusDisplay.style.color = "#1DB954";
statusDisplay.style.fontSize = "0.9rem";
statusDisplay.style.fontStyle = "italic";
statusDisplay.innerText = "Select a banger to start...";
musicList.parentNode.insertBefore(statusDisplay, musicList);

function displaySongs() {
    musicList.innerHTML = ''; 
    
    songs.forEach(song => {
        const div = document.createElement('div');
        div.classList.add('song-item');
        div.innerHTML = `
            <div class="song-info">
                <span class="song-title">${song.title}</span>
            </div>
            <span class="play-icon">▶</span>
        `;
        
        div.addEventListener('click', () => {
            // Update the "Now Playing" text
            statusDisplay.innerText = `Now Playing: ${song.title}`;
            
            // Set the source and play
            audioPlayer.src = `audio/${song.file}`;
            audioPlayer.play().catch(e => {
                console.error("Playback error:", e);
                statusDisplay.innerText = "Error: File not found!";
            });
        });
        
        musicList.appendChild(div);
    });
}

displaySongs();