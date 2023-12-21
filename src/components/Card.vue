<template>
  <div class="">
    <div
      class="thumb h-[250px] sm:h-auto bg-red-500 flex items-center justify-center"
    >
      <img :src="course.poster" alt="Thumbnail" class="w-[100%] h-[100%]" />
    </div>
    <div class="details mt-[20px] max-w-[100%] truncate">
      <h3 class="title text-[#2d2f31] text-[14px] truncate">
        {{ course.title }}
      </h3>
      <p class="meta text-[#6A6F73] text-[12px]">author here</p>
      <Rating />
      <p class="price font-bold">$14.99</p>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
export default {
  name: "Card",
  props: {
    course: {
      type: Object,
    },
  },
  components: {
    Rating,
  },
};
</script>

<style></style>
