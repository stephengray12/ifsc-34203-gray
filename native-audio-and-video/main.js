// VIDEO ELEMENTS
const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const time = document.getElementById("time");
const videoVolumeIcon = document.getElementById("videoVolumeIcon");

// AUDIO ELEMENTS
const audio = document.getElementById("audio");
const audioPlay = document.getElementById("audioPlay");
const audioProgress = document.getElementById("audioProgress");
const audioVolume = document.getElementById("audioVolume");
const audioVolumeIcon = document.getElementById("audioVolumeIcon");

// ================= VIDEO =================

// Play / Pause
playBtn.onclick = () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = "Pause";
  } else {
    video.pause();
    playBtn.textContent = "Play";
  }
};

// Update progress + time
video.ontimeupdate = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;

  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60);
  time.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// Seek
progress.oninput = () => {
  video.currentTime = (progress.value / 100) * video.duration;
};

// Volume control
volume.oninput = () => {
  video.volume = volume.value;

  if (volume.value == 0) {
    videoVolumeIcon.textContent = "🔇";
  } else if (volume.value < 0.5) {
    videoVolumeIcon.textContent = "🔉";
  } else {
    videoVolumeIcon.textContent = "🔊";
  }
};

// Click icon to mute/unmute
videoVolumeIcon.onclick = () => {
  if (video.volume > 0) {
    video.volume = 0;
    volume.value = 0;
  } else {
    video.volume = 1;
    volume.value = 1;
  }
};

// ================= AUDIO =================

// Play / Pause
audioPlay.onclick = () => {
  if (audio.paused) {
    audio.play();
    audioPlay.textContent = "Pause";
  } else {
    audio.pause();
    audioPlay.textContent = "Play";
  }
};

// Update progress
audio.ontimeupdate = () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  audioProgress.value = percent;
};

// Seek
audioProgress.oninput = () => {
  audio.currentTime = (audioProgress.value / 100) * audio.duration;
};

// Volume control
audioVolume.oninput = () => {
  audio.volume = audioVolume.value;

  if (audioVolume.value == 0) {
    audioVolumeIcon.textContent = "🔇";
  } else if (audioVolume.value < 0.5) {
    audioVolumeIcon.textContent = "🔉";
  } else {
    audioVolumeIcon.textContent = "🔊";
  }
};

// Click icon to mute/unmute
audioVolumeIcon.onclick = () => {
  if (audio.volume > 0) {
    audio.volume = 0;
    audioVolume.value = 0;
  } else {
    audio.volume = 1;
    audioVolume.value = 1;
  }
};
