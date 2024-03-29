import axios from "axios";
const host =
  process.env.NODE_ENV == "production"
    ? "https://untitled-backend-1qq6.onrender.com"
    : "http://127.0.0.1:8000";

const courses = {
  state: () => ({
    courses: [],
    curPage: 0,
    totalPages: 0,
    hasMore: false,
  }),
  mutations: {
    setPageData(state, payload) {
      state.courses = payload.courses;
      state.curPage = payload.page;
      state.totalPages = payload.totalPages;
      state.hasMore = payload.hasMore;
    },
  },
  actions: {
    async fetchPageData({ commit }, page = 1) {
      const { data } = await axios.get(`${host}/api/home/${page}`);
      console.log("pageData ", data);
      commit("setPageData", data);
    },
  },
  getters: {
    getCourses(state) {
      return state.courses;
    },
    getPage(state) {
      return state.page;
    },
    getTotalPages(state) {
      return Number(state.totalPages * 15);
    },
    getCoursesCount(state) {
      return Number(state.courses.length);
    },
  },
};

export default courses;
