const prompts = {
  Gratitude: {
    number: 1,
    text: "Name 3 blessings you are thankful for today.",
    // audio: "audio/happy-birthday-334876.mp3",
  },
  Reflection: {
    number: 2,
    text: "What did today teach you about patience or faith?",
    // audio: "audio/happy-birthday-334876.mp3",
  },
  Kindness: {
    number: 3,
    text: "Do one quiet act of kindness for someone today.",
    // audio: "audio/happy-birthday-334876.mp3",
  },
  Action: {
    number: 4,
    text: "Take one small action toward a goal you've been delaying.",
    // audio: "audio/happy-birthday-334876.mp3",
  },
  Forgiveness: {
    number: 5,
    text: "Who do you need to forgive — including yourself?",
    // audio: "audio/happy-birthday-334876.mp3",
  },
  "Focus / Reset": {
    number: 6,
    text: "Release one distraction and refocus your intention.",
    // audio: "audio/happy-birthday-334876.mp3",
  },
};

const title = document.getElementById("promptTitle");
const text = document.getElementById("promptText");
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");

let isPlaying = false;

// Handle card click
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const type = card.dataset.type;
    const data = prompts[type];

    // Preserve span + update title
    title.innerHTML = `<span>${data.number}</span> ${type}`;
    text.textContent = data.text;

    // Reset audio
    audio.src = data.audio;
    audio.pause();
    audio.currentTime = 0;
    playBtn.textContent = "▶";
    isPlaying = false;
  });
});

// Play / Pause
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
  isPlaying = !isPlaying;
});

// Reset when audio ends
audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  isPlaying = false;
});
