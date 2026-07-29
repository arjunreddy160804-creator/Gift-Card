let currentGift = null;

// ==========================================
// AUDIO CONFIGURATION ("THEY CALL THIS LOVE")
// ==========================================
const CHORUS_START_TIME = 38; 
const CHORUS_END_TIME = 68;   

// Handle Scene Transitions
function nextScene(sceneId) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });

    const targetScene = document.getElementById('scene-' + sceneId);
    if (targetScene) {
        targetScene.classList.add('active');
    }

    const audio = document.getElementById("myAudio");

    // Audio Trigger: Play automatically during Song or Scrapbook scenes
    if (sceneId === 'song' || sceneId === 'scrapbook') {
        if (audio.paused) {
            audio.currentTime = CHORUS_START_TIME;
            audio.play().catch(error => {
                console.log("Autoplay prevented by browser:", error);
                const playBtn = document.getElementById('play-pause-btn');
                if (playBtn) playBtn.innerText = '▶️';
                document.getElementById('album-art').classList.remove('spinning');
            });
        }
    } else {
        if (audio) {
            audio.pause();
        }
    }
}

// FULL RESET APP FUNCTION
function resetApp() {
    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.pause();
        audio.currentTime = CHORUS_START_TIME;
    }

    // Reset bouquet flowers
    const flowerContainer = document.getElementById('flower-container');
    if (flowerContainer) {
        flowerContainer.innerHTML = '';
    }

    // Reset card selections
    document.querySelectorAll('.choice-card').forEach(card => card.classList.remove('selected'));
    const revealBtn = document.getElementById('btn-reveal');
    if (revealBtn) revealBtn.classList.add('hidden');

    // Reset No button position
    const noBtn = document.getElementById("btn-no");
    if (noBtn) {
        noBtn.style.position = "relative";
        noBtn.style.left = "auto";
        noBtn.style.top = "auto";
    }

    // Return to opening scene
    nextScene('intro');
}

// Evasive 'No' Button logic
function moveButton() {
    const noBtn = document.getElementById("btn-no");
    const container = document.getElementById("laptop-screen");

    const maxX = container.clientWidth - noBtn.clientWidth - 40;
    const maxY = container.clientHeight - noBtn.clientHeight - 40;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Selection handling for gift options
function selectGift(element, giftType) {
    document.querySelectorAll('.choice-card').forEach(card => {
        card.classList.remove('selected');
    });

    element.classList.add('selected');
    currentGift = giftType;

    const revealBtn = document.getElementById('btn-reveal');
    revealBtn.classList.remove('hidden');
}

// Interactive Bouquet Building
function addFlower(emoji) {
    const container = document.getElementById('flower-container');
    const newFlower = document.createElement('span');
    newFlower.innerText = emoji;
    newFlower.style.fontSize = '1.8rem';
    newFlower.style.animation = 'pulse 0.5s ease';
    
    if (container.children.length < 7) {
        container.appendChild(newFlower);
    }
}

// Audio Player Controls
function toggleAudio() {
    const audio = document.getElementById("myAudio");
    const playBtn = document.getElementById("play-pause-btn");
    const albumArt = document.getElementById("album-art");

    if (audio.paused) {
        if (audio.currentTime < CHORUS_START_TIME || audio.currentTime > CHORUS_END_TIME) {
            audio.currentTime = CHORUS_START_TIME;
        }
        audio.play();
        playBtn.innerText = "⏸️";
        albumArt.classList.add("spinning");
    } else {
        audio.pause();
        playBtn.innerText = "▶️";
        albumArt.classList.remove("spinning");
    }
}

// Audio Progress Sync & Main Lyrics Looper
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("myAudio");
    const progressBar = document.getElementById("progress-bar");

    if (audio) {
        audio.addEventListener("timeupdate", () => {
            if (audio.currentTime >= CHORUS_END_TIME) {
                audio.currentTime = CHORUS_START_TIME;
            }

            const chorusDuration = CHORUS_END_TIME - CHORUS_START_TIME;
            const currentChorusTime = audio.currentTime - CHORUS_START_TIME;
            const percentage = Math.max(0, Math.min(100, (currentChorusTime / chorusDuration) * 100));
            
            if (progressBar) {
                progressBar.style.width = percentage + "%";
            }
        });
    }
});