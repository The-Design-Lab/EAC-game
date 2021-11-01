import { events } from "./event-list";

export function randomEvent() {
  const num = Math.floor(Math.random() * 6);
  if (events[num]) {
    console.log("picked");
    return num;
  } else {
    console.log("No random event");
    return undefined;
  }
}
