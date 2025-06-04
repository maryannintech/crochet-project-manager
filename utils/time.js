import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

export function updateDateTime() {
  return dayjs().format("MMMM D, YYYY - h:mm").toLowerCase();
}
