<!-- Pagination.vue -->

<template>
  <div class="pagination">
    <button @click="goToPage(1)" :disabled="currentPage === 1">First</button>
    <button @click="prevPage" :disabled="currentPage === 1">Prev</button>

    <span v-if="showStartEllipsis && pages[0] !== 1">
      <span>...</span>
    </span>

    <span v-for="page in visiblePages" :key="page">
      <button @click="goToPage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
    </span>

    <span v-if="showEndEllipsis && pages[pages.length - 1] !== totalPages">
      <span>...</span>
    </span>

    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
    <button
      @click="goToPage(totalPages)"
      :disabled="currentPage === totalPages"
    >
      Last
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    visiblePages() {
      const visiblePages = [];
      const totalPages = this.totalPages;
      const currentPage = this.currentPage;

      // Set the number of pages to display on each side of the current page
      const sidePageCount = 2;

      // Determine the start and end of the visible pages
      let startPage = currentPage - sidePageCount;
      let endPage = currentPage + sidePageCount;

      // Adjust if startPage is less than 1
      if (startPage < 1) {
        endPage += 1 - startPage;
        startPage = 1;
      }

      // Adjust if endPage is greater than totalPages
      if (endPage > totalPages) {
        startPage -= endPage - totalPages;
        endPage = totalPages;
      }

      // Populate the visible pages array
      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }

      this.showStartEllipsis = startPage > 1;
      this.showEndEllipsis = endPage < totalPages;

      return visiblePages;
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
    prevPage() {
      this.goToPage(this.currentPage - 1);
    },
    nextPage() {
      this.goToPage(this.currentPage + 1);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}
</style>

<!-- <template>
  <ul class="flex items-center">
    <li
      v-if="active > 1"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      prev
    </li>
    <li
      v-for="(page, i) in [...Array(totalPage <= 6 ? totalPage : 3).keys()]
        .length"
      :key="i"
      :class="active === page ? 'bg-[red] text-white' : ''"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      {{ page }}
    </li>
    <li
      v-if="active > 6"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      ...
    </li>
    <li
      v-if="active > 6"
      class="px-[20px] py-[10px] flex items-center justify-center"
      :class="active === 5 ? 'bg-[red] text-white' : ''"
    >
      {{ active - 2 }}
    </li>
    <li
      v-if="active > 6"
      class="px-[20px] py-[10px] flex items-center justify-center"
      :class="active === 6 ? 'bg-[red] text-white' : ''"
    >
      {{ active - 1 }}
    </li>
    <li
      v-if="active > 6"
      class="px-[20px] py-[10px] flex items-center justify-center"
      :class="active === 7 ? 'bg-[red] text-white' : ''"
    >
      {{ active }}
    </li>
    <li
      v-if="active > 6 && totalPage > 7"
      class="px-[20px] py-[10px] flex items-center justify-center"
      :class="active === 8 ? 'bg-[red] text-white' : ''"
    >
      {{ active + 1 }}
    </li>
    <li
      v-if="active > 6 && totalPage > 7"
      class="px-[20px] py-[10px] flex items-center justify-center"
      :class="active === 9 ? 'bg-[red] text-white' : ''"
    >
      {{ active + 2 }}
    </li>
    <li
      v-if="totalPage >= 10"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      ...
    </li>
    <li
      v-if="totalPage >= 12"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      {{ totalPage - 2 }}
    </li>
    <li
      v-if="totalPage >= 11"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      {{ totalPage - 1 }}
    </li>
    <li
      v-if="totalPage >= 10"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      {{ totalPage }}
    </li>

    <li
      v-if="active < totalPage"
      class="px-[20px] py-[10px] flex items-center justify-center"
    >
      next
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    curPage: { type: Number },
    totalPage: { type: Number, default: 100 },
  },
  data() {
    return {
      active: 10,
    };
  },
};
</script>

<style></style> -->
