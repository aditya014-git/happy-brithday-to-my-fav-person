const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

function showPage(id) {
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("codeForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const code = document.getElementById("secretCode").value.trim();
  const error = document.getElementById("codeError");
  if (code === "26") {
    startBirthdayMusic();
    error.textContent = "";
    showPage("questionPage");
  } else {
    error.textContent = "Incorrect password. Please try again! 💗";
    document.getElementById("secretCode").value = "";
    document.getElementById("secretCode").focus();
  }
});

document.getElementById("noBtn").addEventListener("click", () => {
  alert("Please cutie, see it once! 🥺💗");
});
document.getElementById("yesBtn").addEventListener("click", () => showPage("birthdayPage"));

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});
document.querySelectorAll("[data-gift]").forEach(button => {
  button.addEventListener("click", () => {
    const giftId = button.dataset.gift;
    showPage(giftId);
    if (giftId === "gift5") makeFallingPhotos();
  });
});
document.querySelectorAll(".back-btn").forEach(button => {
  button.addEventListener("click", () => showPage("giftsPage"));
});

musicToggle.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicToggle.textContent = "♫ Music on";
    } else {
      music.pause();
      musicToggle.textContent = "♫ Music";
    }
  } catch (error) {
    alert("Add your song as static/music/song.mp3, then tap Music again. 🎵");
  }
});

document.getElementById("proposalYes").addEventListener("click", () => {
  document.getElementById("proposalReply").textContent =
    "You just made this little birthday surprise even more special. 💗";
});
document.getElementById("proposalMaybe").addEventListener("click", () => {
  document.getElementById("proposalReply").textContent =
    "That's okay! Take your time — no pressure at all. 🌷";
});

let photosCreated = false;
function makeFallingPhotos() {
  if (photosCreated) return;
  photosCreated = true;
  const holder = document.getElementById("fallingPhotos");
  ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"].forEach(name => {
    const img = document.createElement("img");
    img.src = `/static/photos/${name}`;
    img.alt = "A happy memory";
    img.onerror = () => img.remove();
    holder.appendChild(img);
  });
}

// GIFT 5 - 50 REASONS

const reasons = [
    "Your smile can make an ordinary day special.",
    "You're adorable without even trying.",
    "Your little habits are precious.",
    "You make me smile for no reason.",
    "Your laugh is one of my favourite sounds.",
    "You have your own special charm.",
    "You're my favourite notification.",
    "Even your silly moments are memorable.",
    "You make simple things feel magical.",
    "You're wonderfully you.",
    "Because you're a little drama queen.",
    "Because you can be cute and annoying together.",
    "Because you deserve an award for being dramatic.",
    "Because your random talks are entertaining.",
    "Because you're impossible to ignore.",
    "Because you probably don't realise how funny you are.",
    "Because you make me laugh unexpectedly.",
    "Because you're a whole package of surprises.",
    "Because boring moments don't stay boring with you.",
    "Because you're full of surprises.",
    "You make my days brighter.",
    "You deserve all the happiness in the world.",
    "Your feelings matter.",
    "You inspire me to become a better person.",
    "You make little moments meaningful.",
    "You deserve to feel appreciated every day.",
    "You have a beautiful way of being yourself.",
    "You make memories worth keeping.",
    "Your presence makes a difference.",
    "You are more special than words can explain.",
    "Your random conversations.",
    "Your unexpected messages.",
    "The way you express yourself.",
    "Your cute reactions.",
    "Your silly jokes.",
    "Your unique personality.",
    "Your little surprises.",
    "Your way of making me laugh.",
    "The little details about you.",
    "Every new thing I get to learn about you.",
    "You deserve a thousand reasons to smile.",
    "Because you're one of a kind.",
    "Because your happiness matters.",
    "Because you make ordinary days memorable.",
    "Because you're worth celebrating.",
    "Because you deserve kindness.",
    "Because you're a wonderful person.",
    "Because there's always something new to appreciate about you.",
    "Because no list can capture everything special about you.",
    "Simply because you're YOU. ❤️"
];

let openedReasons = 0;
let shuffledReasons = [];

function pickReason() {
    const note = document.getElementById("revealedNote");
    const reasonText = document.getElementById("reasonText");
    const counter = document.getElementById("noteCounter");
    const button = document.getElementById("pickNoteBtn");
    const finalMessage = document.getElementById("finalMessage");

    if (openedReasons === 0) {
        shuffledReasons = [...reasons];

        for (let i = shuffledReasons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledReasons[i], shuffledReasons[j]] =
                [shuffledReasons[j], shuffledReasons[i]];
        }
    }

    if (openedReasons < 50) {
        reasonText.textContent = shuffledReasons[openedReasons];

        openedReasons++;

        counter.textContent = openedReasons + " / 50 notes opened";

        note.classList.remove("show");
        void note.offsetWidth;
        note.classList.add("show");

        if (openedReasons === 50) {
            button.textContent = "All 50 notes opened 💗";
            button.disabled = true;
            finalMessage.classList.add("show");
        }
    }
}

// GIFT 7 - FINAL MYSTERY BOX

function unlockMystery() {

    const enteredCode =
        document.getElementById("mysteryCode").value.trim();

    const error =
        document.getElementById("codeError");

    const box =
        document.getElementById("mysteryBox");

    const codeArea =
        document.getElementById("codeArea");

    const surprise =
        document.getElementById("mysterySurprise");

    const video =
        document.getElementById("finalBirthdayVideo");

    if (enteredCode === "26") {

        error.textContent = "";

        box.classList.add("open");
        codeArea.style.display = "none";

        setTimeout(() => {

            surprise.classList.add("show");
            box.style.display = "none";

            video.muted = true;
            video.currentTime = 0;

            video.play().catch(() => {
                error.textContent =
                    "Please press Play to watch your surprise 💗";
            });

        }, 1000);

    } else {

        error.textContent =
            "Oops! Wrong code. Try again! 💗";
    }
}
function playGift9Video() {
    const video = document.getElementById("gift9Video");

    if (video) {
        video.muted = true;
        video.play().catch(() => {
            console.log("Gift 9 autoplay was blocked.");
        });
    }
}

function playGift6Video() {
    const video = document.getElementById("gift6Video");

    if (video) {
        video.muted = true;
        video.play().catch(() => {
            console.log("Gift 6 autoplay blocked.");
        });
    }
}

// BACKGROUND MUSIC

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicToggle");

    if (!music) return;

    music.volume = 0.4;

    function startMusic() {
        music.play().catch(error => {
            console.log("Music playback blocked:", error);
        });
    }

    // Try autoplay
    startMusic();

    // Start on first interaction if autoplay is blocked
    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });

    // Music button
    if (musicButton) {
        musicButton.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicButton.textContent = "♫ Pause Music";
            } else {
                music.pause();
                musicButton.textContent = "♫ Music";
            }
        });
    }

});

function startBirthdayMusic() {
    const music = document.getElementById("bgMusic");

    if (!music) return;

    music.volume = 0.4;
    music.play().catch(error => {
        console.log("Music could not start:", error);
    });
}