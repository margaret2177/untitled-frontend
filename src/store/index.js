import { createStore } from "vuex";
import users from "./modules/users.js";
import ui from "./modules/ui.js";
import courses from "./modules/courses.js";

export default createStore({
  modules: {
    users,
    ui,
    courses,
  },
});
