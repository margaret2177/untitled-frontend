<template>
  <div class="relative home">
    <mobile-nav v-if="$store.state.ui.mobileNavIsOpen" />
    <Header title="Task Tracker" />
    <main class="min-w-[screen]">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MobileNav from "./components/MobileNav.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    MobileNav,
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 700) {
        if (this.$store.state.ui.mobileNavIsOpen) {
          // alert("close");
          this.$store.commit("toggleMobileNavOpen");
        }
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style></style>
