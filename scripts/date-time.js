import { updateDateTime } from "../utils/time.js";
const todayElement = document.querySelector(".js-date");

function updateTime() {
  todayElement.innerHTML = updateDateTime();
}
updateTime();
setInterval(updateTime, 1000);


