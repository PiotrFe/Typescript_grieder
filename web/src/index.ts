import { User } from "./models/User";

const user = new User({name: "new record", age: 0});

// user.set({ name: "obvious" });
// user.set({ age: 99 });

user.events.on("change", () => {
    console.log("change!")
})

user.events.trigger("change");