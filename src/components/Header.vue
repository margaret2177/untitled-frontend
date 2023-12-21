<template>
  <header
    class="!bg-white drop-shadow-lg min-w-[592px] flex flex-col justify-center"
  >
    <div
      class="main-head !grid grid-cols-3 md:grid-cols-12 items-center min-h-[72px] mx-[10px]"
    >
      <div
        @click="handleClick"
        class="left flex-1 flex items-center justify-start md:hidden"
      >
        <span @click="$store.commit('toggleMobileNavOpen')" class="icon"
          ><i class="fa fa-light fa-bars"></i
        ></span>
      </div>
      <div class="col-span-2 items-center hidden md:flex pr-[10px]">
        <h1 class="logo font-bold">Untitled</h1>
        <div
          class="cats flex flex-1 items-center justify-center text-[14px] text-[#2d2f31]"
        >
          Categories
        </div>
      </div>
      <div class="center col-span-5 flex-1">
        <form
          action=""
          class="bg-[#F7F9FA] flex items-center gap-2 px-[24px] rounded-full border-black border-[1px] h-[46px]"
        >
          <span class="text-[18px] text-[#929495]"
            ><i class="fa fa-light fa-search"></i
          ></span>
          <input
            type="text"
            class="flex-1 text-[14px] pl-[8px] bg-transparent outline-none"
            placeholder="Search for anything"
          />
        </form>
      </div>
      <div class="right col-span-5 flex justify-end gap-5">
        <ul class="links flex">
          <li class="link">Udemy Business</li>
          <li class="link">Teach on Udemy</li>
          <li class="link">My learning</li>
        </ul>
        <!-- <span class="icon link"><i class="fa fa-light fa-search"></i></span> -->
        <span class="icon px-[12px] my-[12px]"
          ><i class="fa fa-regular fa-heart"></i
        ></span>
        <span class="icon px-[12px] my-[12px]"
          ><i class="fa fa-regular fa-cart-shopping"></i
        ></span>
        <span class="icon px-[12px] my-[12px]"
          ><i class="fa fa-regular fa-bell"></i
        ></span>
      </div>
    </div>

    <div
      class="sub-header h-[48px] flex items-center justify-center border-t-[1px] border-gray-700"
    >
      <ul class="links flex">
        <li class="link">Development</li>
        <li class="link">Business</li>
        <li class="link">Finance & Accounting</li>
        <li class="link">IT & Softwares</li>
        <li class="link">Office Productivity</li>
        <li class="link">Personal Development</li>
        <li class="link">Design</li>
        <li class="link">Marketing</li>
        <li class="link">Health & Fitness</li>
        <li class="link">Music</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
  components: {},
  methods: {
    handleClick() {
      // document.body.style.overflowX = "hidden";
    },
  },
};
</script>

<style scoped>
header {
}
.logo {
  text-decoration: none;
  font-size: 20px;
  color: black;
  text-transform: uppercase;
}
</style>
