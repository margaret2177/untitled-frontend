const ui = {
  state: () => ({
    mobileNavIsOpen: false,
  }),
  mutations: {
    toggleMobileNavOpen(state) {
      state.mobileNavIsOpen = !state.mobileNavIsOpen;
    },
  },
  actions: {},
  getters: {},
};

export default ui;
