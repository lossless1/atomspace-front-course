import event from "events";
const myEmitter = new event.EventEmitter();
myEmitter.on("heyguys", () => {
  console.log("We are here!!");
});

myEmitter.emit("heyguys");
export default { events: "events" };
