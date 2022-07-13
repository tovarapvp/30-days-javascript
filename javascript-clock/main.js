const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const second = document.getElementById("seconds");

setInterval(() => {
  const days = new Date();
  const Hours = days.getHours();
  const Minutes = days.getMinutes().toString().padStart(2, "0");
  const seconds = days.getSeconds().toString().padStart(2, "0");
  second.innerHTML = `${seconds}`;
  minutes.innerHTML = `${Minutes}`;
  hours.innerHTML = `${Hours}`;
}, 1000);
