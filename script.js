let currentGift = null;

// ==========================================
// AUDIO CONFIGURATION ("THEY CALL THIS LOVE")
// ==========================================
const CHORUS_START_TIME = 38; 
const CHORUS_END_TIME = 68;   

// ==========================================
// REALISTIC SVG FLOWER GRAPHICS
// ==========================================
const FLOWER_SVGS = {
    rose: `<svg viewBox="0 0 100 160" class="flower-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rose-stem" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2d6a4f"/>
      <stop offset="100%" stop-color="#1b4332"/>
    </linearGradient>
    <radialGradient id="rose-petal-main" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#ff1744"/>
      <stop offset="60%" stop-color="#d50000"/>
      <stop offset="100%" stop-color="#800000"/>
    </radialGradient>
    <radialGradient id="rose-petal-highlight" cx="40%" cy="30%" r="40%">
      <stop offset="0%" stop-color="#ff616f"/>
      <stop offset="100%" stop-color="#ff1744"/>
    </radialGradient>
  </defs>
  <path d="M 50 65 Q 48 110 50 160" stroke="url(#rose-stem)" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M 49 110 Q 25 100 20 115 Q 35 125 49 115" fill="#2d6a4f"/>
  <path d="M 51 95 Q 75 85 80 100 Q 65 110 51 102" fill="#1b4332"/>
  <polygon points="48,130 42,133 48,136" fill="#1b4332"/>
  <path d="M 38 72 Q 50 82 62 72 Q 50 60 38 72" fill="#2d6a4f"/>
  <path d="M 22 48 C 15 23, 40 8, 50 20 C 60 8, 85 23, 78 48 C 70 68, 30 68, 22 48 Z" fill="url(#rose-petal-main)"/>
  <path d="M 28 40 C 22 20, 45 13, 50 24 C 55 13, 78 20, 72 40 C 65 56, 35 56, 28 40 Z" fill="url(#rose-petal-highlight)"/>
  <path d="M 36 36 C 34 23, 50 18, 50 28 C 50 18, 66 23, 64 36 C 60 46, 40 46, 36 36 Z" fill="#d50000"/>
  <circle cx="50" cy="28" r="5" fill="#ff616f"/>
</svg>`,

    peony: `<svg viewBox="0 0 100 160" class="flower-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="peony-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff0f5"/>
      <stop offset="40%" stop-color="#ffb6c1"/>
      <stop offset="85%" stop-color="#ff69b4"/>
      <stop offset="100%" stop-color="#c71585"/>
    </radialGradient>
  </defs>
  <path d="M 50 72 Q 52 115 50 160" stroke="#40916c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M 51 105 Q 78 95 82 110 Q 68 122 51 112" fill="#52b788"/>
  <path d="M 49 125 Q 22 118 18 132 Q 32 142 49 130" fill="#2d6a4f"/>
  <circle cx="50" cy="42" r="32" fill="url(#peony-grad)"/>
  <path d="M 20 42 Q 25 17 50 15 Q 75 17 80 42 Q 75 67 50 69 Q 25 67 20 42 Z" fill="#ff85a1" opacity="0.75"/>
  <path d="M 28 39 C 20 27, 40 19, 50 27 C 60 19, 80 27, 72 39 C 80 52, 60 62, 50 55 C 40 62, 20 52, 28 39 Z" fill="#ff477e"/>
  <circle cx="50" cy="39" r="7" fill="#ffb703"/>
  <circle cx="48" cy="37" r="2" fill="#ffffff"/>
  <circle cx="52" cy="41" r="2" fill="#ffffff"/>
</svg>`,

    sunflower: `<svg viewBox="0 0 100 160" class="flower-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sun-center" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3d1e03"/>
      <stop offset="70%" stop-color="#5c2c06"/>
      <stop offset="100%" stop-color="#241001"/>
    </radialGradient>
    <linearGradient id="sun-petal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffea00"/>
      <stop offset="70%" stop-color="#ffaa00"/>
      <stop offset="100%" stop-color="#dd6b00"/>
    </linearGradient>
  </defs>
  <path d="M 50 68 Q 48 110 50 160" stroke="#2d6a4f" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M 52 98 Q 85 88 90 113 Q 70 128 52 106" fill="#1b4332"/>
  <path d="M 48 118 Q 15 108 10 133 Q 30 146 48 124" fill="#2d6a4f"/>
  <g transform="translate(50, 42)">
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(0)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(30)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(60)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(90)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(120)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(150)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(180)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(210)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(240)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(270)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(300)"/>
    <path d="M -6 0 Q 0 -36 6 0 Q 0 10 -6 0" fill="url(#sun-petal)" transform="rotate(330)"/>
    <circle cx="0" cy="0" r="16" fill="url(#sun-center)"/>
    <circle cx="0" cy="0" r="14" stroke="#ffaa00" stroke-width="1" stroke-dasharray="2 3" fill="none" opacity="0.6"/>
  </g>
</svg>`,

    orchid: `<svg viewBox="0 0 100 160" class="flower-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="orchid-petal" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f72585"/>
      <stop offset="60%" stop-color="#7209b7"/>
      <stop offset="100%" stop-color="#3a0ca3"/>
    </radialGradient>
  </defs>
  <path d="M 50 68 Q 60 110 50 160" stroke="#38b000" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 52 108 Q 80 103 85 118 Q 70 128 52 116" fill="#007200"/>
  <g transform="translate(50, 42)">
    <path d="M 0 0 L -8 -28 Q 0 -34 8 -28 Z" fill="#b5179e"/>
    <path d="M 0 0 L -30 7 Q -32 16 -24 20 Z" fill="#b5179e"/>
    <path d="M 0 0 L 30 7 Q 32 16 24 20 Z" fill="#b5179e"/>
    <ellipse cx="-18" cy="-8" rx="16" ry="13" fill="url(#orchid-petal)" transform="rotate(-15 -18 -8)"/>
    <ellipse cx="18" cy="-8" rx="16" ry="13" fill="url(#orchid-petal)" transform="rotate(15 18 -8)"/>
    <path d="M -11 4 C -14 20, -7 26, 0 26 C 7 26, 14 20, 11 4 Z" fill="#ff007f"/>
    <path d="M -5 8 Q 0 20 5 8 Q 0 3 -5 8 Z" fill="#ffb703"/>
    <circle cx="0" cy="5" r="2.5" fill="#ffffff"/>
  </g>
</svg>`,

    daisy: `<svg viewBox="0 0 100 160" class="flower-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="daisy-petal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="80%" stop-color="#f0f4f8"/>
      <stop offset="100%" stop-color="#d9e2ec"/>
    </linearGradient>
    <radialGradient id="daisy-center" cx="40%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#ffee58"/>
      <stop offset="70%" stop-color="#fbc02d"/>
      <stop offset="100%" stop-color="#f57f17"/>
    </radialGradient>
  </defs>
  <path d="M 50 66 Q 48 110 50 160" stroke="#70e000" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 49 102 Q 20 92 15 107 Q 30 117 49 109" fill="#38b000"/>
  <path d="M 51 122 Q 80 112 85 127 Q 70 137 51 129" fill="#007200"/>
  <g transform="translate(50, 40)">
    <g fill="url(#daisy-petal)" stroke="#bcccdc" stroke-width="0.5">
      <ellipse cx="0" cy="-22" rx="4.5" ry="14"/>
      <ellipse cx="11" cy="-19" rx="4.5" ry="14" transform="rotate(30 11 -19)"/>
      <ellipse cx="19" cy="-11" rx="4.5" ry="14" transform="rotate(60 19 -11)"/>
      <ellipse cx="22" cy="0" rx="4.5" ry="14" transform="rotate(90 22 0)"/>
      <ellipse cx="19" cy="11" rx="4.5" ry="14" transform="rotate(120 19 11)"/>
      <ellipse cx="11" cy="19" rx="4.5" ry="14" transform="rotate(150 11 19)"/>
      <ellipse cx="0" cy="22" rx="4.5" ry="14" transform="rotate(180 0 22)"/>
      <ellipse cx="-11" cy="19" rx="4.5" ry="14" transform="rotate(210 -11 19)"/>
      <ellipse cx="-19" cy="11" rx="4.5" ry="14" transform="rotate(240 -19 11)"/>
      <ellipse cx="-22" cy="0" rx="4.5" ry="14" transform="rotate(270 -22 0)"/>
      <ellipse cx="-19" cy="-11" rx="4.5" ry="14" transform="rotate(300 -19 -11)"/>
      <ellipse cx="-11" cy="-19" rx="4.5" ry="14" transform="rotate(330 -11 -19)"/>
    </g>
    <circle cx="0" cy="0" r="10" fill="url(#daisy-center)"/>
  </g>
</svg>`,

    hydrangea: `<svg viewBox="0 0 100 160" class="flower-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="hyd-floret" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a0c4ff"/>
      <stop offset="60%" stop-color="#4361ee"/>
      <stop offset="100%" stop-color="#3f37c9"/>
    </radialGradient>
  </defs>
  <path d="M 50 75 Q 50 115 50 160" stroke="#2b9348" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M 52 108 C 85 88, 95 123, 52 120 Z" fill="#155d27"/>
  <path d="M 48 126 C 15 108, 5 143, 48 138 Z" fill="#2b9348"/>
  <g transform="translate(50, 40)">
    <circle cx="0" cy="0" r="30" fill="#3f37c9" opacity="0.3"/>
    <g fill="url(#hyd-floret)">
      <g transform="translate(-12, -12)"><circle cx="-4" cy="0" r="3.5"/><circle cx="4" cy="0" r="3.5"/><circle cx="0" cy="-4" r="3.5"/><circle cx="0" cy="4" r="3.5"/><circle cx="0" cy="0" r="1.2" fill="#fff"/></g>
      <g transform="translate(12, -12)"><circle cx="-4" cy="0" r="3.5"/><circle cx="4" cy="0" r="3.5"/><circle cx="0" cy="-4" r="3.5"/><circle cx="0" cy="4" r="3.5"/><circle cx="0" cy="0" r="1.2" fill="#fff"/></g>
      <g transform="translate(-14, 8)"><circle cx="-4" cy="0" r="3.5"/><circle cx="4" cy="0" r="3.5"/><circle cx="0" cy="-4" r="3.5"/><circle cx="0" cy="4" r="3.5"/><circle cx="0" cy="0" r="1.2" fill="#fff"/></g>
      <g transform="translate(14, 8)"><circle cx="-4" cy="0" r="3.5"/><circle cx="4" cy="0" r="3.5"/><circle cx="0" cy="-4" r="3.5"/><circle cx="0" cy="4" r="3.5"/><circle cx="0" cy="0" r="1.2" fill="#fff"/></g>
      <g transform="translate(0, -2)"><circle cx="-5" cy="0" r="4"/><circle cx="5" cy="0" r="4"/><circle cx="0" cy="-5" r="4"/><circle cx="0" cy="5" r="4"/><circle cx="0" cy="0" r="1.5" fill="#fff"/></g>
      <g transform="translate(0, -18)"><circle cx="-3.5" cy="0" r="3"/><circle cx="3.5" cy="0" r="3"/><circle cx="0" cy="-3.5" r="3"/><circle cx="0" cy="3.5" r="3"/><circle cx="0" cy="0" r="1" fill="#fff"/></g>
    </g>
  </g>
</svg>`
};

// ==========================================
// REALISTIC BOUQUET LAYOUT POSITIONS
// ==========================================
const BOUQUET_SLOTS = [
    { x: 0, y: -45, rotate: 0, zIndex: 10, scale: 1.0 },       // 0: Center Focal
    { x: -38, y: -38, rotate: -18, zIndex: 9, scale: 0.96 },   // 1: Mid Left
    { x: 38, y: -38, rotate: 18, zIndex: 9, scale: 0.96 },     // 2: Mid Right
    { x: 0, y: -78, rotate: 2, zIndex: 8, scale: 0.92 },       // 3: Top Center
    { x: -68, y: -18, rotate: -32, zIndex: 7, scale: 0.88 },   // 4: Far Left
    { x: 68, y: -18, rotate: 32, zIndex: 7, scale: 0.88 },     // 5: Far Right
    { x: -42, y: -68, rotate: -20, zIndex: 8, scale: 0.9 },    // 6: Top Left
    { x: 42, y: -68, rotate: 20, zIndex: 8, scale: 0.9 },      // 7: Top Right
    { x: -18, y: -28, rotate: -8, zIndex: 11, scale: 0.98 },   // 8: Deep Center Left
    { x: 18, y: -24, rotate: 8, zIndex: 12, scale: 1.02 },    // 9: Front Accent Right
    { x: -25, y: -90, rotate: -12, zIndex: 6, scale: 0.85 },   // 10: High Left
    { x: 25, y: -90, rotate: 12, zIndex: 6, scale: 0.85 }     // 11: High Right
];

let selectedFlowers = [];

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
        if (audio && audio.paused) {
            audio.currentTime = CHORUS_START_TIME;
            audio.play().catch(error => {
                console.log("Autoplay prevented by browser:", error);
                const playBtn = document.getElementById('play-pause-btn');
                if (playBtn) playBtn.innerText = '▶️';
                const art = document.getElementById('album-art');
                if (art) art.classList.remove('spinning');
            });
        }
    } else {
        if (audio) {
            audio.pause();
        }
    }

    // Auto-initialize bouquet if empty on entering bouquet scene
    if (sceneId === 'bouquet' && selectedFlowers.length === 0) {
        addPresetBouquet();
    }
}

// FULL RESET APP FUNCTION
function resetApp() {
    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.pause();
        audio.currentTime = CHORUS_START_TIME;
    }

    clearBouquet();

    // Reset card selections and badges
    document.querySelectorAll('.choice-card').forEach(card => {
        card.classList.remove('selected', 'opened');
        const badge = card.querySelector('.opened-badge');
        if (badge) badge.remove();
    });

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

    if (!noBtn || !container) return;

    const maxX = container.clientWidth - noBtn.clientWidth - 40;
    const maxY = container.clientHeight - noBtn.clientHeight - 40;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Dynamic Gift Selection - opens the exact surprise associated with the clicked gift immediately
function selectGift(arg1, arg2) {
    let element = null;
    let giftIdentifier = null;

    if (arg1 instanceof HTMLElement) {
        element = arg1;
        giftIdentifier = arg2;
    } else if (arg2 instanceof HTMLElement) {
        element = arg2;
        giftIdentifier = arg1;
    } else {
        giftIdentifier = arg1;
    }

    // Mapping gift identifiers (IDs, types, or 0-based indices) to surprise scene names
    const surpriseMap = {
        'letter': 'memories',
        'memories': 'memories',
        '0': 'memories',
        0: 'memories',
        'bouquet': 'bouquet',
        '1': 'bouquet',
        1: 'bouquet',
        'song': 'song',
        'playlist': 'song',
        '2': 'song',
        2: 'song',
        'photos': 'photos',
        'gallery': 'photos',
        '3': 'photos',
        3: 'photos',
        'secret': 'secret',
        'coupon': 'secret',
        '4': 'secret',
        4: 'secret'
    };

    let targetScene = surpriseMap[giftIdentifier];

    // Fallback: check element attributes if targetScene is not yet resolved
    if (!targetScene && element) {
        const dataGift = element.getAttribute('data-gift') || element.getAttribute('data-id') || element.getAttribute('data-index');
        if (dataGift !== null) {
            targetScene = surpriseMap[dataGift] || dataGift;
        }
    }

    // Fallback if string ID matches a scene directly
    if (!targetScene && typeof giftIdentifier === 'string') {
        targetScene = giftIdentifier;
    }

    currentGift = giftIdentifier;

    if (element) {
        document.querySelectorAll('.choice-card').forEach(card => card.classList.remove('selected'));
        element.classList.add('selected', 'opened');

        if (!element.querySelector('.opened-badge')) {
            const badge = document.createElement('span');
            badge.className = 'opened-badge';
            badge.innerText = 'Opened ✨';
            element.appendChild(badge);
        }
    }

    if (targetScene) {
        nextScene(targetScene);
    }
}

// Alias openGift function for convenience and direct index/ID calls
function openGift(arg1, arg2) {
    selectGift(arg1, arg2);
}

// ==========================================
// REALISTIC BOUQUET CRAFTING SYSTEM
// ==========================================
function addFlowerToBouquet(flowerType) {
    if (selectedFlowers.length < 12) {
        selectedFlowers.push(flowerType);
        renderBouquet();
    }
}

function removeFlowerFromBouquet(index) {
    if (index >= 0 && index < selectedFlowers.length) {
        selectedFlowers.splice(index, 1);
        renderBouquet();
    }
}

function clearBouquet() {
    selectedFlowers = [];
    renderBouquet();
}

function addPresetBouquet() {
    selectedFlowers = ['rose', 'peony', 'sunflower', 'hydrangea', 'daisy', 'orchid', 'rose'];
    renderBouquet();
}

function renderBouquet() {
    const stage = document.getElementById('bouquet-flowers-stage');
    const counter = document.getElementById('bouquet-count');
    if (!stage) return;

    stage.innerHTML = '';

    selectedFlowers.forEach((type, idx) => {
        const slot = BOUQUET_SLOTS[idx % BOUQUET_SLOTS.length];
        const wrapper = document.createElement('div');
        wrapper.className = 'bouquet-flower-item';
        wrapper.setAttribute('title', 'Tap to remove flower');
        wrapper.onclick = () => removeFlowerFromBouquet(idx);

        wrapper.style.left = `calc(50% + ${slot.x}px)`;
        wrapper.style.top = `calc(50% + ${slot.y}px)`;
        wrapper.style.transform = `translate(-50%, -50%) rotate(${slot.rotate}deg) scale(${slot.scale})`;
        wrapper.style.zIndex = slot.zIndex;

        wrapper.innerHTML = FLOWER_SVGS[type] || FLOWER_SVGS.rose;
        stage.appendChild(wrapper);
    });

    if (counter) {
        counter.innerText = `${selectedFlowers.length} / 12 Flowers`;
    }
}

// Legacy emoji helper fallback
function addFlower(flowerType) {
    if (FLOWER_SVGS[flowerType]) {
        addFlowerToBouquet(flowerType);
    } else {
        const map = { '🌹': 'rose', '🌸': 'peony', '🌷': 'daisy', '🌻': 'sunflower', '🌺': 'orchid', '✨': 'hydrangea' };
        addFlowerToBouquet(map[flowerType] || 'rose');
    }
}

// Audio Player Controls
function toggleAudio() {
    const audio = document.getElementById("myAudio");
    const playBtn = document.getElementById("play-pause-btn");
    const albumArt = document.getElementById("album-art");
    const spotifyBtns = document.querySelectorAll(".spotify-play-btn");

    if (!audio) return;

    if (audio.paused) {
        if (audio.currentTime < CHORUS_START_TIME || audio.currentTime > CHORUS_END_TIME) {
            audio.currentTime = CHORUS_START_TIME;
        }
        audio.play();
        if (playBtn) playBtn.innerText = "⏸️";
        if (albumArt) albumArt.classList.add("spinning");
        spotifyBtns.forEach(btn => btn.innerText = "⏸️");
    } else {
        audio.pause();
        if (playBtn) playBtn.innerText = "▶️";
        if (albumArt) albumArt.classList.remove("spinning");
        spotifyBtns.forEach(btn => btn.innerText = "▶️");
    }
}

// ==========================================
// PHOTO MODAL & SPECIFIC SONG PLAYER SYSTEM
// ==========================================
function openPhotoModal(imgSrc, captionTitle, songTitle, artistName) {
    const modal = document.getElementById("photo-modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");
    const modalSongTitle = document.getElementById("modal-song-title");
    const modalArtist = document.getElementById("modal-artist");
    const modalPlayBtn = document.getElementById("modal-play-btn");

    if (!modal) return;

    if (modalImg) modalImg.src = imgSrc;
    if (modalCaption) modalCaption.innerText = captionTitle || "Special Memory 💕";
    if (modalSongTitle) modalSongTitle.innerText = songTitle || "They Call This Love";
    if (modalArtist) modalArtist.innerText = artistName || "Elliot James Reay";

    modal.classList.add("active");

    // Play the specific song!
    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.currentTime = CHORUS_START_TIME;
        audio.play().then(() => {
            if (modalPlayBtn) modalPlayBtn.innerText = "⏸️";
            document.querySelectorAll(".spotify-play-btn").forEach(btn => btn.innerText = "⏸️");
        }).catch(err => console.log("Audio play caught:", err));
    }
}

function closePhotoModal() {
    const modal = document.getElementById("photo-modal");
    if (modal) {
        modal.classList.remove("active");
    }
}

// Close photo modal when pressing Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closePhotoModal();
    }
});

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

    renderBouquet();
});