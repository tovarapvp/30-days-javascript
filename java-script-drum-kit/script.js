const body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
  const lyrics = event.key;
  const keyA = document.getElementById(lyrics);
  if (keyA == null) return;
  const song = document.getElementById(keyA.attributes.song.textContent);
  song.play();
  keyA.classList.toggle("push");
  body.addEventListener("keyup",()=>{keyA.classList.remove("push")})
  
});
