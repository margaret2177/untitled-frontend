<template>
  <div class="home">
    <!-- <Hero /> -->
    <main class="px-[30px] flex flex-col gap-3">
      <div class="small-title my-[10px]">
        Popular for Full Stack Web Developers
      </div>
      <!-- <div ref="carouselContainer" class="carousel relative">
        <div
          @click="handleCarouselNav('prev')"
          class="card-contro prev absolute z-10 -left-6 top-[16%] w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center"
        >
          <span class="text-white text-[24px]">
            <i class="fa fa-solid fa-chevron-left"></i>
          </span>
        </div>
        <div
          @click="handleCarouselNav('next')"
          class="card-contro next absolute z-10 -right-6 top-[16%] w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center"
        >
          <span class="text-white text-[24px]">
            <i class="fa fa-solid fa-chevron-right"></i>
          </span>
        </div>
        <div class="!max-w-[100%] overflow-hidden"> -->
      <div
        :style="{ transform: `translate(${translateX}px, 0px)` }"
        ref="cardContainer"
        class="card-container transition-transform grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-5"
      >
        <div v-for="(course, index) in getCourses" :key="index">
          <card :course="course" />
        </div>
      </div>
      <pagination
        :total-items="getTotalPages"
        :items-per-page="getCoursesCount"
        :current-page="page"
        @page-changed="handlePageChange"
      ></pagination>
      <!-- </div>
      </div> -->
    </main>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";
import Pagination from "@/components/Pagination.vue";
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src

export default {
  components: { Card, Hero, Pagination },
  name: "HomeView",
  data() {
    return {
      cardWidth: 0,
      translateX: 0,
      page: 0,
      totalPages: 0,
      courses: [],
    };
  },
  computed: {
    ...mapGetters([
      "getCourses",
      "getPageData",
      "getTotalPages",
      "getPage",
      "getCoursesCount",
    ]),
  },
  methods: {
    handlePageChange(newPage) {
      this.page = newPage;
      this.$router.push(`/?page=${this.page}`);
    },
    handleCarouselNav(dir) {
      let carouselContainer = this.$refs.carouselContainer;
      let cardContaier = this.$refs.cardContainer;
      let carouselBb = carouselContainer.getBoundingClientRect();
      let cardBb = cardContaier.getBoundingClientRect();
      if (dir === "prev") {
        console.log(cardBb, carouselBb);
        if (cardBb.left > carouselBb.left + this.cardWidth) {
          this.translateX += this.cardWidth;
        } else {
          alert("edge");
        }
      } else {
        console.log(cardBb.right, carouselBb.right);

        if (cardBb.right > carouselBb.right + this.cardWidth) {
          this.translateX -= this.cardWidth;
        }
      }
    },
    ...mapActions(["fetchPageData"]),
  },
  created() {
    this.cardWidth = 138;
    this.page = Number(this.$route.query.page) || 1;
    this.fetchPageData(this.page);
    console.log("path ", this.$route);
    console.log("totalPages ", this.getTotalPages);
    console.log("coursesCount ", this.getCoursesCount);
    console.log("page ", this.getPage);
  },
  watch: {
    page() {
      this.fetchPageData(this.page);
    },
  },
};
</script>
<style>
.card-container {
  min-width: 100%;
}
</style>
